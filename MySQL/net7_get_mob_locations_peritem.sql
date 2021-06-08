# Includes MOBs that appear in radar, and thus appear in the NAV list as well.
use net7_b;

select
    S.name as Sector, SO.name as Name, F.name as Faction, SO.position_x as PosX, SO.position_y as PosY, SO.position_z as PosZ, SONN.nav_name as NearestNav, MI.mob_id as MobID, MB.name as MobName, MB.type as MobType, SOM.mob_count as MobCount, MB.level as MobLevel, MB.aggressiveness as MobAggro, SOM.respawn_time as MobRespawn, concat(IB.name, " (", MI.drop_chance, "%)") as Drops
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
right join
    mob_items as MI
on
    MSG.mob_id = MI.mob_id
left join
    item_base as IB
on
    MI.item_base_id = IB.id


where
#    SO.appears_in_radar = 0
#and
    S.name is not null
order by
    S.name, SO.name desc
#    MI.mob_id
