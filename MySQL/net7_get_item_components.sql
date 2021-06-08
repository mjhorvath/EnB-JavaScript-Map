use net7_b;

select
    IB0.name as Name, IB1.name as Comp1, IB2.name as Comp2, IB3.name as Comp3, IB4.name as Comp4, IB5.name as Comp5, IB6.name as Comp6, difficulty as Difficulty
from
    item_manufacture as IM
join
    item_base as IB0
on
    IM.item_id = IB0.id
join
    item_base as IB1
on
    IM.item_id = IB1.id
join
    item_base as IB2
on
    IM.comp_1 = IB2.id
join
    item_base as IB3
on
    IM.comp_1 = IB3.id
join
    item_base as IB4
on
    IM.comp_1 = IB4.id
join
    item_base as IB5
on
    IM.comp_1 = IB5.id
join
    item_base as IB6
on
    IM.comp_1 = IB6.id