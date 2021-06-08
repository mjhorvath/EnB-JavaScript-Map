use
    net7_b;

select
    SO.name as Object, SO.sector_object_id as ID, S.name as Sector, SO.appears_in_radar as Radar, SO.position_x as PosX, SO.position_y as PosY, SO.position_z as PosZ
from
    sector_objects as SO
left join
    sectors as S
on
    SO.sector_id = S.sector_id


order by
    SO.sector_object_id
