create database db_tasks;
use db_tasks;
create table tasks(
	id INT auto_increment primary key,
    email VARCHAR(255) not null,
    telefone VARCHAR(11) unique not null
);
select*from tasks;

drop database db_tasks;