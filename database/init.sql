create database suculentasdb;

create table boxes(
  box_id char(8) primary key,
  reserved_by char(8) references users(user_id),
  image_url varchar(200) unique not null,
  sold boolean not null
);

create table users(
  user_id char(8) primary key,
  name varchar(50),
  userName varchar(20) unique not null,
  email varchar(50) unique not null,
  phoneNumber varchar(20)
);
