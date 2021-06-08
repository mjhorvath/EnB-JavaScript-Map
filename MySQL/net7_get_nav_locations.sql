# Includes ore, MOBs, etc. that happen to appear in radar.
use net7_b;
select
    S.name as Sector, SO.name as Name, SOT.name as Type, SO.position_x as PosX, SO.position_y as PosY, SO.position_z as PosZ, ifnull(S2.name,SB.name) as GateTo
from
    sector_objects as SO


left join
    sectors as S
on
    SO.sector_id = S.sector_id
left join
    sectors as S2
on
    SO.gate_to = S2.sector_id
left join
    starbases as SB
on
    substring(SO.gate_to,1,char_length(SO.gate_to)-1) = SB.sector_id
left join
    sector_objects_types as SOT
on
    SO.type = SOT.type_id


where
    SO.appears_in_radar = 1
/*
and
    type in (3, 11, 12, 37)
and
    SO.gate_to != 0
and
    SO.gate_to is not null
*/
order by
    S.Name, SO.name
