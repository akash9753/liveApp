create database aws_deno_db;
use aws_deno_db;

create table product (
    id integer primary key auto_increment,
    title varchar(100),
    price float,
    description varchar(100),
    advertiseUrl varchar(100)
);