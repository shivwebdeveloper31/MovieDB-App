import React, { useState, useEffect } from 'react';
import './Upcoming.css'

import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import TopRatedMovie from './TopRatedMovie';


const API_TOP = "https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&query";

const TopRated = () => {

    const [toprated, setToprated] = useState([]);
    const [query, setQuery] = useState('');

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setToprated(data.results);
        }
        catch (e) {
            console.log(e);
        }
    }

    const changeHandler = (e) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        fetch(API_TOP)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setToprated(data.results);
            })
    }, [])


    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">MovieDb App</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

                    <Navbar.Collapse id="nabarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll></Nav>

                        <Navbar.Brand as={Link} to="/">Popular</Navbar.Brand>

                        <Navbar.Brand as={Link} to="/toprated">Top Rated</Navbar.Brand>
                        <Navbar.Brand as={Link} to="/upcoming">Upcoming</Navbar.Brand>

                        <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
                            <FormControl
                                type="search"
                                placeholder="Movie Search"
                                className="me-2"
                                aria-label="search"
                                name="query"
                                value={query} onChange={changeHandler}></FormControl>
                            <Button variant="secondary" type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h3>Top Rated Movie</h3>
            <div>
                {toprated.length > 0 ? (
                    <div className="container">
                        <div className="grid">
                            {toprated.map((movieReq) =>
                                <TopRatedMovie key={movieReq.id} {...movieReq} />)}
                        </div>
                    </div>
                ) : (
                    <h2>Sorry !! No Movies Found</h2>
                )}
            </div>
        </div>
    )
}

export default TopRated;
