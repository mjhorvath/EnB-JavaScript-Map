# Does not include decorations that appear in radar.
use net7_b;
select
    S.Name as Sector, SO.name as Name, SO.position_x as PosX, SO.position_y as PosY, SO.position_z as PosZ, SONN.nav_name as NearestNav
from
    sector_objects as SO


left join
    sectors as S
on
    SO.sector_id = S.sector_id
left join
    sector_objects_nearest_nav as SONN
on
    SO.sector_object_id = SONN.sector_object_id


where
    type = 37
and
    SO.appears_in_radar = 0
order by
    S.Name, SO.name
