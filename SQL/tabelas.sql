create database `web2`;
use `web2`;

create table `usuario`(
`id` int(11) not null auto_increment primary key,
`nome` varchar(255) null default null,
`senha` varchar(20) null default null
);

insert into usuario(nome, senha) values ("Icaro", "asdfghjklzxcvbnmqwer");
insert into usuario(nome, senha) values ("Aline", "qwertyuiopasdfghjklç");

select * from usuario;