use net7_b;
DELIMITER |
drop function num_mobs_lvl|
drop function filter_asset|

create function num_mobs_lvl
(
    mob_count int(11),
    mob_level int(11),
    col_number int
)
returns int(11)
deterministic
begin
    declare mobnum int(11);
    set mobnum = mob_count*(1-abs(sign(mob_level-col_number)));
    return mobnum;
end|


create function filter_asset
(
    asset_descr_in VARCHAR(128)
)
returns VARCHAR(128)
deterministic
begin
    declare asset_descr_out VARCHAR(128);
    set asset_descr_out = replace(replace(replace(replace(replace(replace(asset_descr_in,"Pocket ",""),"Resource ",""),"Asteroid - ","")," 1","")," 2","")," 3","");
    return asset_descr_out;
end|
