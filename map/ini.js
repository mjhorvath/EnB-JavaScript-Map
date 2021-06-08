var fram_dims_arr 	=
[
	[640,480],
	[800,600],
	[1024,768]
]
var sect_curr		= 'Ragnarok'
var mapp_scal		= 1/500
var icon_scal		= 1
var labl_size		= 'small'
var grid_thck		= 1

function getElementByEvent(e)
{
	if (!e)	var ev = window.event
	else	var ev = e
	return (ev.target) ? ev.target : ev.srcElement
}
function fill_sector_list()
{
	var sector_elem = document.getElementById('sector_select')
	for (var i in sect_list)
	{
		var new_option = document.createElement('option')
		var sys_label = sys_list[i]
		var new_label = document.createTextNode(i + ' (' + sys_label + ')')
		if (i == sect_curr)
			new_option.setAttribute('selected','selected')
		new_option.setAttribute('sector', i)
		new_option.appendChild(new_label)
		sector_elem.appendChild(new_option)
	}
}
function init()
{
	reset_checkbox()
	fill_sector_list()
	change_sector()
	change_zoom()
	change_mapsize()
}
function change_sector()
{
	var sect_elem		= document.getElementById('sector_select')
	var head_elem		= document.getElementById('sector_header')
	sect_curr		= sect_elem.options[sect_elem.selectedIndex].getAttribute('sector')
	var syst_curr		= sys_list[sect_curr]
	head_elem.innerHTML	= sect_curr + ' (' + syst_curr + ')'
	clear_map()
	fill_map()
}
function change_zoom()
{
	var zoom_elem		= document.getElementById('zoom_select')
	mapp_scal		= zoom_elem.value/500
	clear_map()
	fill_map()
}
function change_mapsize()
{
	var size_elem		= document.getElementById('mapsize_select')
	var fram_elem		= document.getElementById('fram_elem')
	var fram_dims		= fram_dims_arr[size_elem.value]
//	fram_elem.scrollLeft	= fram_dims[0]/4
//	fram_elem.scrollTop	= fram_dims[1]/4
	fram_elem.style.width	= fram_dims[0] + 'px'
	fram_elem.style.height	= fram_dims[1] + 'px'
}
function clear_map()
{
	var nav_icon_elem	= document.getElementById('nav_icon_elem')
	var ore_icon_elem	= document.getElementById('ore_icon_elem')
	var mob_icon_elem	= document.getElementById('mob_icon_elem')
	var dec_icon_elem	= document.getElementById('dec_icon_elem')
	var nav_note_elem	= document.getElementById('nav_note_elem')
	var ore_note_elem	= document.getElementById('ore_note_elem')
	var mob_note_elem	= document.getElementById('mob_note_elem')
//	var dec_note_elem	= document.getElementById('dec_note_elem')
	var nav_labl_elem	= document.getElementById('nav_labl_elem')
	var ore_labl_elem	= document.getElementById('ore_labl_elem')
	var mob_labl_elem	= document.getElementById('mob_labl_elem')
//	var dec_labl_elem	= document.getElementById('dec_labl_elem')
	var plnt_elem		= document.getElementById('plnt_elem')
	while (plnt_elem.hasChildNodes())
	{
		plnt_elem.removeChild(plnt_elem.lastChild)
	}
	while (nav_icon_elem.hasChildNodes())
	{
		nav_icon_elem.removeChild(nav_icon_elem.lastChild)
		nav_note_elem.removeChild(nav_note_elem.lastChild)
		nav_labl_elem.removeChild(nav_labl_elem.lastChild)
	}
	while (ore_icon_elem.hasChildNodes())
	{
		ore_icon_elem.removeChild(ore_icon_elem.lastChild)
		ore_note_elem.removeChild(ore_note_elem.lastChild)
		ore_labl_elem.removeChild(ore_labl_elem.lastChild)
	}
	while (mob_icon_elem.hasChildNodes())
	{
		mob_icon_elem.removeChild(mob_icon_elem.lastChild)
		mob_note_elem.removeChild(mob_note_elem.lastChild)
		mob_labl_elem.removeChild(mob_labl_elem.lastChild)
	}
	while (dec_icon_elem.hasChildNodes())
	{
		dec_icon_elem.removeChild(dec_icon_elem.lastChild)
//		dec_note_elem.removeChild(dec_note_elem.lastChild)
//		dec_labl_elem.removeChild(dec_labl_elem.lastChild)
	}
}
function fill_map()
{
	// sectors
	var sect_prot		= sect_list[sect_curr]
	var sect_minX		= sect_prot[0]
	var sect_minY		= sect_prot[1]
	var sect_maxX		= sect_prot[3]
	var sect_maxY		= sect_prot[4]
	var sect_wide		= sect_maxX - sect_minX
	var sect_high		= sect_maxY - sect_minY

	// map objects
	var ore_selc_null	= 'null'
	var ore_loot_null	= 'null,null,null,null'
	var mob_selc_null	= 'null,null,null,null,null,null,null'
	var mob_loot_null	= 'null,null,null,null,null'
	var nav_prot		= nav_list[sect_curr] ? nav_list[sect_curr] : []
	var ore_prot		= ore_list[sect_curr] ? ore_list[sect_curr] : []
	var mob_prot		= mob_list[sect_curr] ? mob_list[sect_curr] : []
	var dec_prot		= dec_list[sect_curr] ? dec_list[sect_curr] : []
	var icon_elem		= document.getElementById('icon_elem')
	var note_elem		= document.getElementById('note_elem')
	var labl_elem		= document.getElementById('labl_elem')
	var plnt_elem		= document.getElementById('plnt_elem')
	var nav_icon_elem	= document.getElementById('nav_icon_elem')
	var ore_icon_elem	= document.getElementById('ore_icon_elem')
	var mob_icon_elem	= document.getElementById('mob_icon_elem')
	var dec_icon_elem	= document.getElementById('dec_icon_elem')
	var nav_note_elem	= document.getElementById('nav_note_elem')
	var ore_note_elem	= document.getElementById('ore_note_elem')
	var mob_note_elem	= document.getElementById('mob_note_elem')
	var dec_note_elem	= document.getElementById('dec_note_elem')
	var nav_labl_elem	= document.getElementById('nav_labl_elem')
	var ore_labl_elem	= document.getElementById('ore_labl_elem')
	var mob_labl_elem	= document.getElementById('mob_labl_elem')
	var dec_labl_elem	= document.getElementById('dec_labl_elem')

	// size of map
	var mapp_elem		= document.getElementById('mapp_elem')
	mapp_elem.style.width	= sect_wide * mapp_scal + 'px'
	mapp_elem.style.height	= sect_high * mapp_scal + 'px'

	// axes
	var axes_tl		= document.getElementById('axes_tl')
	var axes_tr		= document.getElementById('axes_tr')
	var axes_bl		= document.getElementById('axes_bl')
	var axes_br		= document.getElementById('axes_br')
	axes_tl.style.width	= -sect_minX * mapp_scal + 'px'
	axes_tr.style.width	= +sect_maxX * mapp_scal + 'px'
	axes_bl.style.width	= -sect_minX * mapp_scal + 'px'
	axes_br.style.width	= +sect_maxX * mapp_scal + 'px'
	axes_tl.style.height	= +sect_maxY * mapp_scal + 'px'
	axes_tr.style.height	= +sect_maxY * mapp_scal + 'px'
	axes_bl.style.height	= -sect_minY * mapp_scal + 'px'
	axes_br.style.height	= -sect_minY * mapp_scal + 'px'
	axes_tl.style.top	= -grid_thck + 'px'
	axes_tr.style.top	= -grid_thck + 'px'
	axes_bl.style.top	= +sect_maxY * mapp_scal - grid_thck + 'px'
	axes_br.style.top	= +sect_maxY * mapp_scal - grid_thck + 'px'
	axes_tl.style.left	= -grid_thck + 'px'
	axes_tr.style.left	= -sect_minX * mapp_scal - grid_thck + 'px'
	axes_bl.style.left	= -grid_thck + 'px'
	axes_br.style.left	= -sect_minX * mapp_scal - grid_thck + 'px'

	// sector stats
	var stat_elem		= document.getElementById('sector_stats')
	stat_elem.style.whiteSpace	= 'pre'
	var stat_prot		= stat_list[sect_curr]
	var stat_text		= 'MOBs\t\t(' + 'link'.link('enb_mob_distribution_table.php') + ')' +
				  '\nTotal:'.italics()	+ '\t' + stat_prot[0] +
				  '\nMedian:'.italics()	+ '\t' + stat_prot[1] + '\n' +
				  '\nOre\t\t(' + 'link'.link('enb_ore_distribution_table.php') + ')' +
				  '\nTotal:'.italics()	+ '\t' + stat_prot[2] +
				  '\nMedian:'.italics()	+ '\t' + stat_prot[3]
	stat_elem.innerHTML	= stat_text

	// NAVs
	for (var i = 0, n = nav_prot.length; i < n; i++)
	{
		var itm_prot			= nav_prot[i]
		var itm_name			= itm_prot[0] ? itm_prot[0] : '???'
		var itm_type			= itm_prot[1] ? itm_prot[1] : '???'
		var itm_cooX			= itm_prot[2]
		var itm_cooY			= itm_prot[3]
		var itm_cooZ			= itm_prot[4]
		var itm_gate			= itm_prot[5] ? itm_prot[5] : null
		var itm_left			= (itm_cooX - sect_minX) * mapp_scal
		var itm_topp			= (sect_maxY - itm_cooY) * mapp_scal
		var itm_wide			= 16 * icon_scal
		var itm_high			= 16 * icon_scal
		switch (itm_type)
		{
			case 'Planet':
				if (itm_gate)	var itm_isrc	= './map/icon_plan_grn.png'
				else		var itm_isrc	= './map/icon_plan_gry.png'
			break
			case 'Gate':
				if (itm_gate)	var itm_isrc	= './map/icon_gate_grn.png'
				else		var itm_isrc	= './map/icon_gate_gry.png'
			break
			case 'Station':
				if (itm_gate)	var itm_isrc	= './map/icon_sbas_grn.png'
				else		var itm_isrc	= './map/icon_sbas_gry.png'
			break
			case 'Decoration':
				if (itm_gate)	var itm_isrc	= './map/icon_deco_grn.png'
				else		var itm_isrc	= './map/icon_deco_gry.png'
			break
		}

		// planets/moons
		switch (itm_type)
		{
			case 'Planet':
				var itm_plnt		= document.createElement('img')
				var itm_plnt_wide	= 64 * icon_scal
				var itm_plnt_high	= 64 * icon_scal
				itm_plnt.src		= './map/astr_earth_sml.png'
				itm_plnt.style.position	= 'absolute'
				itm_plnt.style.width	= itm_plnt_wide + 'px'
				itm_plnt.style.height	= itm_plnt_high + 'px'
				itm_plnt.style.zIndex	= 0
				itm_plnt.style.left	= itm_left - itm_plnt_wide/2 + 'px'
				itm_plnt.style.top	= itm_topp - itm_plnt_high/2 + 'px'
				plnt_elem.appendChild(itm_plnt)
			break
		}

		// tooltips
		var itm_titl			=  'Name:'.bold()	+ '\n    '	+ itm_name.italics()		+ '\n'
		if (itm_gate)
			itm_titl		+= 'GateTo:'.bold()	+ '\n    '	+ itm_gate.toString().italics()	+ '\n'
		itm_titl			+= 'Coords:'.bold()	+ '\n    ('	+ itm_cooX.toString().italics() + ',' + itm_cooY.toString().italics() + ',' + itm_cooZ.toString().italics() + ')'
		var itm_clos			= document.createElement('img')
		itm_clos.id			= 'nav_clos_' + i
		itm_clos.src			= './map/butt_clos.png'
		itm_clos.style.position		= 'absolute'
		itm_clos.style.right		= 0 + 'px'
		itm_clos.style.top		= 0 + 'px'
		itm_clos.onclick		= clck_descriptions
		var itm_note			= document.createElement('div')
		itm_note.id			= 'nav_note_' + i
		itm_note.innerHTML		= itm_titl
		itm_note.style.zIndex		= 5
		itm_note.style.whiteSpace	= 'pre'
		itm_note.style.fontSize		= 'small'
		itm_note.style.visibility	= 'hidden'
		itm_note.style.position		= 'absolute'
		if (itm_gate)
			itm_note.style.background	= '#00a000'
		else
			itm_note.style.background	= '#a0a0a0'
		itm_note.style.padding		= '2px 4px'
		itm_note.style.border		= 'solid 2px #000000'
		itm_note.style.left		= itm_left - itm_wide/2 + 'px'
		itm_note.style.top		= itm_topp + itm_high/2 + 'px'
		itm_note.appendChild(itm_clos)
		nav_note_elem.appendChild(itm_note)

		// labels
		var itm_labl			= document.createElement('span')
		var itm_text			= document.createTextNode(itm_name)
		itm_labl.style.position		= 'absolute'
		itm_labl.style.fontSize		= labl_size
		itm_labl.style.color		= '#ffffff'
		itm_labl.style.zIndex		= 3
		itm_labl.style.left		= itm_left + itm_wide/2 + 'px'
		itm_labl.style.top		= itm_topp - itm_high/2 + 'px'
		itm_labl.appendChild(itm_text)
		nav_labl_elem.appendChild(itm_labl)

		// icons
		var itm_icon			= document.createElement('img')
		itm_icon.src			= itm_isrc
		itm_icon.id			= 'nav_icon_' + i
		itm_icon.style.position		= 'absolute'
		itm_icon.style.width		= itm_wide + 'px'
		itm_icon.style.height		= itm_high + 'px'
		itm_icon.style.zIndex		= 4
		itm_icon.style.left		= itm_left - itm_wide/2 + 'px'
		itm_icon.style.top		= itm_topp - itm_high/2 + 'px'
		itm_icon.setAttribute('clicked', 0)
		itm_icon.onmouseover		= movr_descriptions
		itm_icon.onmouseout		= mout_descriptions
		itm_icon.onclick		= clck_descriptions
		nav_icon_elem.appendChild(itm_icon)
	}

	// ore
	for (var i = 0, n = ore_prot.length; i < n; i++)
	{
		var itm_prot			= ore_prot[i]
		var itm_name			= itm_prot[0] ? itm_prot[0] : '???'
		var itm_levl			= itm_prot[1] ? itm_prot[1] : '???'
		var itm_amnt			= itm_prot[2] ? itm_prot[2] : '???'
		var itm_cooX			= itm_prot[3]
		var itm_cooY			= itm_prot[4]
		var itm_selc			= itm_prot[7] != ore_selc_null ? itm_prot[7] : 'None'
		var itm_loot			= itm_prot[8] != ore_loot_null ? itm_prot[8] : 'None'
		var itm_left			= (itm_cooX - sect_minX) * mapp_scal
		var itm_topp			= (sect_maxY - itm_cooY) * mapp_scal
		var itm_wide			= 16 * icon_scal
		var itm_high			= 16 * icon_scal
		var itm_isrc			= './map/icon_ores_yel.png'

		// tooltips
		itm_selc			= parse_ore(itm_selc, ore_selc_null)
		itm_loot			= parse_item_list(itm_loot, ore_loot_null, 'ore_loot')
		var itm_titl			= 'Name:'.bold()	+ '\n    '	+ itm_name.italics()		+ '\n' +
						  'Level:'.bold()	+ '\t'		+ itm_levl.toString().italics()	+ '\n' +
						  'Number:'.bold()	+ '\t'		+ itm_amnt.toString().italics()	+ '\n' +
						  'Ore:'.bold()		+ '\n    '	+ itm_selc.italics()		+ '\n' +
						  'Loot:'.bold()	+ '\n    '	+
						  'Name (Lvl,ID,Typ)'	+ '\n    '	+ itm_loot.italics()		+ '\n' +
						  'Coords:'.bold()	+ '\n    ('	+ itm_cooX.toString().italics() + ',' + itm_cooY.toString().italics() + ',' + itm_cooZ.toString().italics() + ')'
		var itm_clos			= document.createElement('img')
		itm_clos.id			= 'ore_clos_' + i
		itm_clos.src			= './map/butt_clos.png'
		itm_clos.style.position		= 'absolute'
		itm_clos.style.right		= 0 + 'px'
		itm_clos.style.top		= 0 + 'px'
		itm_clos.onclick		= clck_descriptions
		var itm_note			= document.createElement('div')
		itm_note.id			= 'ore_note_' + i
		itm_note.innerHTML		= itm_titl
		itm_note.style.zIndex		= 5
		itm_note.style.whiteSpace	= 'pre'
		itm_note.style.fontSize		= 'small'
		itm_note.style.visibility	= 'hidden'
		itm_note.style.position		= 'absolute'
		itm_note.style.background	= '#a0a000'
		itm_note.style.padding		= '2px 4px'
		itm_note.style.border		= 'solid 2px #000000'
		itm_note.style.left		= itm_left - itm_wide/2 + 'px'
		itm_note.style.top		= itm_topp + itm_high/2 + 'px'
		itm_note.appendChild(itm_clos)
		ore_note_elem.appendChild(itm_note)

		// labels
		var itm_labl			= document.createElement('span')
		var itm_text			= document.createTextNode(itm_levl)
		itm_labl.style.position		= 'absolute'
		itm_labl.style.fontSize		= labl_size
		itm_labl.style.color		= '#ffff00'
		itm_labl.style.zIndex		= 3
		itm_labl.style.left		= itm_left + itm_wide/2 + 2 + 'px'
		itm_labl.style.top		= itm_topp - itm_high/2 - 0 + 'px'
		itm_labl.appendChild(itm_text)
		ore_labl_elem.appendChild(itm_labl)

		// icons
		var itm_icon			= document.createElement('img')
		itm_icon.src			= itm_isrc
		itm_icon.id			= 'ore_icon_' + i
		itm_icon.style.position		= 'absolute'
		itm_icon.style.width		= itm_wide + 'px'
		itm_icon.style.height		= itm_high + 'px'
		itm_icon.style.zIndex		= 4
		itm_icon.style.left		= itm_left - itm_wide/2 + 'px'
		itm_icon.style.top		= itm_topp - itm_high/2 + 'px'
		itm_icon.setAttribute('clicked', 0)
		itm_icon.onmouseover		= movr_descriptions
		itm_icon.onmouseout		= mout_descriptions
		itm_icon.onclick		= clck_descriptions
		ore_icon_elem.appendChild(itm_icon)
	}

	// MOBs
	for (var i = 0, n = mob_prot.length; i < n; i++)
	{
		var itm_prot			= mob_prot[i]
		var itm_name			= itm_prot[0] ? itm_prot[0] : '???'
		var itm_amnt			= itm_prot[1] ? itm_prot[1] : '???'
		var itm_levl			= itm_prot[2] ? itm_prot[2] : '???'
		var itm_cooX			= itm_prot[3]
		var itm_cooY			= itm_prot[4]
		var itm_cooZ			= itm_prot[5]
		var itm_selc			= itm_prot[7] != mob_selc_null ? itm_prot[7] : 'None'
		var itm_loot			= itm_prot[8] != mob_loot_null ? itm_prot[8] : 'None'
		var itm_left			= (itm_cooX - sect_minX) * mapp_scal
		var itm_topp			= (sect_maxY - itm_cooY) * mapp_scal
		var itm_wide			= 16 * icon_scal
		var itm_high			= 16 * icon_scal
		var itm_isrc			= './map/icon_ship_red.png'

		// tooltips
		itm_selc			= parse_item_list(itm_selc, mob_selc_null, 'mob_selc')
		itm_loot			= parse_item_list(itm_loot, mob_loot_null, 'mob_loot')
		itm_levl			= parse_mob_levels(itm_levl)
		var itm_titl			= 'Name:'.bold()			+ '\n    '	+ itm_name.italics()		+ '\n' +
						  'Levels:'.bold()			+ '\t'		+ itm_levl.italics()		+ '\n' +
						  'Number:'.bold()			+ '\t'		+ itm_amnt.toString().italics()	+ '\n' +
						  'MOBs:'.bold()			+ '\n    '	+
						  'Name (Lvl,Agg,Spw,Fac,ID,Typ)'	+ '\n    '	+ itm_selc.italics()		+ '\n' +
						  'Loot:'.bold()			+ '\n    '	+
						  'Name (Lvl,%Drop,ID,Typ)'		+ '\n    '	+ itm_loot.italics()		+ '\n' +
						  'Coords:'.bold()			+ '\n    ('	+ itm_cooX.toString().italics() + ',' + itm_cooY.toString().italics() + ',' + itm_cooZ.toString().italics() + ')'
		var itm_clos			= document.createElement('img')
		itm_clos.id			= 'mob_clos_' + i
		itm_clos.src			= './map/butt_clos.png'
		itm_clos.style.position		= 'absolute'
		itm_clos.style.right		= 0 + 'px'
		itm_clos.style.top		= 0 + 'px'
		itm_clos.onclick		= clck_descriptions
		var itm_note			= document.createElement('div')
		itm_note.id			= 'mob_note_' + i
		itm_note.innerHTML		= itm_titl
		itm_note.style.zIndex		= 5
		itm_note.style.whiteSpace	= 'pre'
		itm_note.style.fontSize		= 'small'
		itm_note.style.visibility	= 'hidden'
		itm_note.style.position		= 'absolute'
		itm_note.style.background	= '#a00000'
		itm_note.style.padding		= '2px 4px'
		itm_note.style.border		= 'solid 2px #000000'
		itm_note.style.left		= itm_left - itm_wide/2 + 'px'
		itm_note.style.top		= itm_topp + itm_high/2 + 'px'
		itm_note.appendChild(itm_clos)
		mob_note_elem.appendChild(itm_note)

		// labels
		var itm_labl			= document.createElement('span')
		var itm_text			= document.createTextNode(itm_levl)
		itm_labl.style.position		= 'absolute'
		itm_labl.style.fontSize		= labl_size
		itm_labl.style.color		= '#ff0000'
		itm_labl.style.zIndex		= 3
		itm_labl.style.left		= itm_left + itm_wide/2 + 'px'
		itm_labl.style.top		= itm_topp - itm_high/2 + 'px'
		itm_labl.appendChild(itm_text)
		mob_labl_elem.appendChild(itm_labl)

		// icons
		var itm_icon			= document.createElement('img')
		itm_icon.src			= itm_isrc
		itm_icon.id			= 'mob_icon_' + i
		itm_icon.style.position		= 'absolute'
		itm_icon.style.width		= itm_wide + 'px'
		itm_icon.style.height		= itm_high + 'px'
		itm_icon.style.zIndex		= 4
		itm_icon.style.left		= itm_left - itm_wide/2 + 'px'
		itm_icon.style.top		= itm_topp - itm_high/2 + 'px'
		itm_icon.setAttribute('clicked', 0)
		itm_icon.onmouseover		= movr_descriptions
		itm_icon.onmouseout		= mout_descriptions
		itm_icon.onclick		= clck_descriptions
		mob_icon_elem.appendChild(itm_icon)
	}

	// decoration
	for (var i = 0, n = dec_prot.length; i < n; i++)
	{
		var itm_prot			= dec_prot[i]
		var itm_cooX			= itm_prot[1]
		var itm_cooY			= itm_prot[2]
		var itm_cooZ			= itm_prot[3]
		var itm_left			= (itm_cooX - sect_minX) * mapp_scal
		var itm_topp			= (sect_maxY - itm_cooY) * mapp_scal
		var itm_wide			= 2 * icon_scal
		var itm_high			= 2 * icon_scal

		// icons
		var itm_icon			= document.createElement('div')
		itm_icon.style.position		= 'absolute'
		itm_icon.style.background	= '#808080'
		itm_icon.style.width		= itm_wide + 'px'
		itm_icon.style.height		= itm_high + 'px'
		itm_icon.style.zIndex		= 0
		itm_icon.style.left		= itm_left - itm_wide/2 + 'px'
		itm_icon.style.top		= itm_topp - itm_high/2 + 'px'
		dec_icon_elem.appendChild(itm_icon)
	}
}
function movr_descriptions(e)
{
	var target_elem			= getElementByEvent(e)
	if (target_elem.getAttribute('clicked') == 0)
	{
		var target_id		= target_elem.id
		var id_array		= target_id.split('_')
		var description_id	= id_array[0] + '_note_' + id_array[2]
		var description_elem	= document.getElementById(description_id)
		description_elem.style.visibility = 'visible'
	}
}
function mout_descriptions(e)
{
	var target_elem			= getElementByEvent(e)
	if (target_elem.getAttribute('clicked') == 0)
	{
		var target_id		= target_elem.id
		var id_array		= target_id.split('_')
		var description_id	= id_array[0] + '_note_' + id_array[2]
		var description_elem	= document.getElementById(description_id)
		description_elem.style.visibility = 'hidden'
	}
}
function clck_descriptions(e)
{
	var target_elem		= getElementByEvent(e)
	var target_id		= target_elem.id
	var id_array		= target_id.split('_')
	var icon_id		= id_array[0] + '_icon_' + id_array[2]
	var description_id	= id_array[0] + '_note_' + id_array[2]
	var icon_elem		= document.getElementById(icon_id)
	var description_elem	= document.getElementById(description_id)
	if (icon_elem.getAttribute('clicked') == 0)
	{
		description_elem.style.visibility = 'visible'
		icon_elem.setAttribute('clicked', 1)
	}
	else
	{
		description_elem.style.visibility = 'hidden'
		icon_elem.setAttribute('clicked', 0)
	}
}
function toggle_layers(e)
{
	var target_elem		= getElementByEvent(e)
	var target_prefix	= target_elem.id.split('_')[0]
	var target_state	= target_elem.checked
	var icon_elem_id	= target_prefix + '_icon_elem'
	var labl_elem_id	= target_prefix + '_labl_elem'
	var note_elem_id	= target_prefix + '_note_elem'
	if (target_state)
	{
		document.getElementById(icon_elem_id).style.display = 'block'
		document.getElementById(labl_elem_id).style.display = 'block'
		document.getElementById(note_elem_id).style.display = 'block'
	}
	else
	{
		document.getElementById(icon_elem_id).style.display = 'none'
		document.getElementById(labl_elem_id).style.display = 'none'
		document.getElementById(note_elem_id).style.display = 'none'
	}
}
function toggle_labels(e)
{
	var target_elem		= getElementByEvent(e)
	var target_state	= target_elem.checked
	if (target_state)
		document.getElementById('labl_elem').style.display = 'block'
	else
		document.getElementById('labl_elem').style.display = 'none'
}
function enable_checkbox()
{
	document.getElementById('nav_box').onchange	= toggle_layers
	document.getElementById('mob_box').onchange	= toggle_layers
	document.getElementById('ore_box').onchange	= toggle_layers
	document.getElementById('dec_box').onchange	= toggle_layers
	document.getElementById('lbl_box').onchange	= toggle_labels
}
function reset_checkbox()
{
	document.getElementById('nav_box').checked	= true
	document.getElementById('mob_box').checked	= true
	document.getElementById('ore_box').checked	= true
	document.getElementById('dec_box').checked	= true
	document.getElementById('lbl_box').checked	= true
}
function parse_item_list(inp_str, inp_nll, inp_typ)
{
	var inp_arr	= inp_str.split(';').sort()
	var out_str	= ''
	for (var i = 0, n = inp_arr.length; i < n; i++)
	{
		var i_itm		= inp_arr[i]
		if (i_itm == 'None')
		{
			out_str		= i_itm
			break
		}
		else if (i_itm == inp_nll)
		{
			continue
		}
		else
		{
			var i_arr		= i_itm.split(',')
			var i_str		= ''
			switch (inp_typ)
			{
				case 'mob_selc':
					var i_idx	= i_arr[5]
					var i_typ	= i_arr[6]
					var lnk_url	= 'http://enbarsenal.com/mob/view_mob.php?mid=' + i_idx
				break
				case 'mob_loot':
					var i_idx	= i_arr[3]
					var i_typ	= i_arr[4]
					var lnk_url	= 'http://enbarsenal.com/item/view_item.php?&id=' + i_idx + '&type=' + i_typ
				break
				case 'ore_loot':
					var i_idx	= i_arr[2]
					var i_typ	= i_arr[3]
					var lnk_url	= 'http://enbarsenal.com/item/view_item.php?&id=' + i_idx + '&type=' + i_typ
				break
			}
			for (var j = 0, o = i_arr.length; j < o; j++)
			{
				var j_itm	= i_arr[j]
				i_str		+= j_itm
				if (j == 0)
					i_str	= i_str.link(lnk_url) + ' ('
				else if (j == o - 1)
					i_str	+= ')'
				else
					i_str	+= ','
			}
			out_str			+= i_str
		}
		if (i < (n - 1))
			out_str			+= '\n    '
	}
	return out_str
}
function parse_ore(inp_str, inp_null)
{
	var inp_arr			= inp_str.split(';').sort()
	var out_str			= ''
	for (var j = 0, o = inp_arr.length; j < o; j++)
	{
		var i_itm		= inp_arr[j]
		if (i_itm == inp_null)
			continue
		if (j % 4 == 3)
			out_str		+= '\n    '
		out_str			+= inp_arr[j]
		if (j < (o - 1))
			out_str		+= ', '
	}
	return out_str
}
function parse_mob_levels(inp_str)
{
	var inp_arr			= inp_str.split(',').sort()
	var min_levl			= inp_arr[0]
	var max_levl			= inp_arr[inp_arr.length - 1]
	if (max_levl > min_levl)
		return min_levl + '-' + max_levl
	else
		return min_levl
}
