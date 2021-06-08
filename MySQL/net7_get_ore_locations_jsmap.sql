# Includes ore that appear in radar, and thus in the NAV list as well.
use net7_b;

select
    ifnull(S.name,"null") as Sector, ifnull(SO.name,"null") as Name, ifnull(SOH.level,"null") as Level, ifnull(SOH.res_count,"null") as Number, ifnull(SO.position_x,"null") as PosX, ifnull(SO.position_y,"null") as PosY, ifnull(SO.position_z,"null") as PosZ, ifnull(SONN.nav_name,"null") as NearestNav, group_concat(distinct ifnull(filter_asset(A.descr),"null") separator ";") as Resources, group_concat(distinct CONCAT_WS(",", ifnull(IB.name,"null"), ifnull(IB.level,"null"), ifnull(IB.id,"null"), ifnull(IB.type,"null")) separator ";") as Extras
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
    S.name, SO.name
