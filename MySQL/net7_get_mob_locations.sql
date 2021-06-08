# Includes MOBs that appear in radar, and thus appear in the NAV list as well.
use net7_b;

select
    S.name as Sector, SO.name as Name, SOM.mob_count as Number, group_concat(distinct MB.level separator ",") as Level, SO.position_x as PosX, SO.position_y as PosY, SO.position_z as PosZ, SONN.nav_name as NearestNav, group_concat(distinct CONCAT_WS(",", ifnull(MB.name,"null"), ifnull(MB.level,"null"), ifnull(MB.type,"null"), ifnull(MB.aggressiveness,"null"), ifnull(SOM.respawn_time,"null"), ifnull(F.name,"null")) separator ";") as Mobs, group_concat(distinct CONCAT_WS(",", IB.name, IB.level, MI.drop_chance) separator ";") as Drops
from
    sector_objects_mob as SOM


left join
    sector_objects as SO
on
    SOM.mob_id = SO.sector_object_id
left join
    sectors as S
on
    SO.sector_id = S.sector_id
left join
    sector_objects_nearest_nav as SONN
on
    SO.sector_object_id = SONN.sector_object_id


left join
    mob_spawn_group as MSG
on
    SOM.mob_id = MSG.spawn_group_id
left join
    mob_base as MB
on
    MSG.mob_id = MB.mob_id
left join
    factions as F
on
    MB.faction_id = F.faction_id
left join
    mob_items as MI
on
    MSG.mob_id = MI.mob_id
left join
    item_base as IB
on
    MI.item_base_id = IB.id


#where
#    SO.appears_in_radar = 0
group by
    SOM.mob_id
order by
    S.name, MB.level desc
