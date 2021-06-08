use net7_b;
drop table if exists sector_objects_types;
create table sector_objects_types
(
    type_id tinyint not null primary key,
    name varchar(16)
);
insert into sector_objects_types (type_id, name) values	(0,'Mob'),
	(3,'Planet'),
	(11,'Gate'),
	(12,'Station'),
	(37,'Decoration'),
	(38,'Ore');
