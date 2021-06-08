# Includes ore that appear in radar, and thus in the NAV list as well.
use net7_b;

select
    S.name as Sector, SO.name as Name, SOH.level as Level, SOH.res_count as Number, SO.position_x as PosX, SO.position_y as PosY, SO.position_z as PosZ, group_concat(distinct filter_asset(A.descr) separator ";") as Resources, group_concat(distinct IB.name separator ";") as Extras, SONN.nav_name as NearestNav
from
    sector_objects as SO


left join
    sector_objects_harvestable_restypes as SOHR
on
    SO.sector_object_id = SOHR.group_id
left join
    sector_objects_harvestable as SOH
on
    SO.sector_object_id = SOH.resource_id
join
    assets as A
on
    SOHR.type = A.base_id
left join
    sectors as S
on
    SO.sector_id = S.sector_id
left join
    sector_objects_harvestable_oretypes as SOHO
on
    SO.sector_object_id = SOHO.resource_id
left join
    item_base as IB
on
    SOHO.additional_ore_item_id = IB.id
left join
    sector_objects_nearest_nav as SONN
on
    SO.sector_object_id = SONN.sector_object_id


#where
#    SO.appears_in_radar = 0
group by
    SO.sector_object_id, SO.position_x, SO.position_y, SO.position_z
order by
    S.name, SOH.level desc
