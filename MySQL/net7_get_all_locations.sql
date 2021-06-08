use
    net7_b;

select
    S.name as Sector, SO.name as Object, SOT.name as Type, S2.name as GateTo, SO.appears_in_radar as InRadar, SYS.name as System, SO.position_x as PosX, SO.position_y as PosY, SO.position_z as PosZ
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
    sector_objects_types as SOT
on
    SO.type = SOT.type_id
left join
    systems as SYS
on
    S.system_id = SYS.system_id


order by
    S.name, SO.appears_in_radar, SOT.name, SO.name
