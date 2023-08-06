DROP DATABASE IF EXISTS movies_dev;
CREATE DATABASE movies_dev;

\c movies_dev;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    director TEXT,
    genre TEXT,
    has_watched BOOLEAN,
    rotten_tomato_score INTEGER,
    CHECK (rotten_tomato_score >= 0 AND rotten_tomato_score <= 100),
    release_date DATE,
    runtime INTEGER
);
