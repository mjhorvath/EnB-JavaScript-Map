/* Should probably use CAST inside the actual queries instead of modifying the data directly. */
use net7_b;

ALTER TABLE sector_objects MODIFY name nvarchar(128);
ALTER TABLE sectors MODIFY name nvarchar(128);
ALTER TABLE item_base MODIFY description nvarchar(1024);
alter table systems modify name nvarchar(64);
alter table assets modify descr nvarchar(128);
alter table mob_base modify name nvarchar(64);
