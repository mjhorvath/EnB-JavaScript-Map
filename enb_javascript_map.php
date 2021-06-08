<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>EnB JavaScript Sector Map</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
		<meta name="Description" content="An interactive JavaScript map of the Earth & Beyond universe."></meta>
		<base target="_blank"/>
		<link rel="stylesheet" type="text/css" href="./map/style.css"/>
		<link rel="icon" type="image/vnd.microsoft.icon" href="http://isometricland.com/favicon.ico"/>
		<link rel="SHORTCUT ICON" href="http://isometricland.com/favicon.ico"/>
		<script language="javascript" type="text/javascript" src="./map/sec.js"></script>
		<script language="javascript" type="text/javascript" src="./map/nav.js"></script>
		<script language="javascript" type="text/javascript" src="./map/ore.js"></script>
		<script language="javascript" type="text/javascript" src="./map/mob.js"></script>
		<script language="javascript" type="text/javascript" src="./map/dec.js"></script>
		<script language="javascript" type="text/javascript" src="./map/sys.js"></script>
		<script language="javascript" type="text/javascript" src="./map/inf.js"></script>
		<script language="javascript" type="text/javascript" src="./map/ini.js"></script>
	</head>
	<body onload="init();enable_checkbox();">
		<table id="big_table">
			<tr>
				<td rowspan="3">
					<fieldset>
						<legend>Hide/Show</legend>
						<form>
							<input id="nav_box" type="checkbox" checked="true"><label for="nav_box">NAVs</label><br/>
							<input id="mob_box" type="checkbox" checked="true"><label for="mob_box">MOBs</label><br/>
							<input id="ore_box" type="checkbox" checked="true"><label for="ore_box">Ore</label><br/>
							<input id="dec_box" type="checkbox" checked="true"><label for="dec_box">Deco</label><hr/>
							<input id="lbl_box" type="checkbox" checked="true"><label for="lbl_box">Labels</label><br/>
						</form>
					</fieldset>
					<fieldset>
						<legend>Zoom</legend>
						<form>
							<select id="zoom_select" onchange="change_zoom()">
								<option value="0.50">50%</option>
								<option value="0.75">75%</option>
								<option value="1.00" selected="selected">100%</option>
								<option value="1.25">125%</option>
								<option value="1.50">150%</option>
								<option value="2.00">200%</option>
							</select>
						</form>
					</fieldset>
					<fieldset>
						<legend>Sector Info</legend>
						<div id="sector_stats"></div>
					</fieldset>
					<fieldset>
						<legend>Mouse XYZ</legend>
						<div id="sector_cood">X:<br/>Y:<br/>Z:</div>
					</fieldset>
				</td>
				<td>
					<h3 id="sector_header">Ragnarok</h3>
				</td>
			</tr>
			<tr>
				<td>
					<fieldset>
						<legend>Map</legend>
						<div id="fram_elem">
							<div id="mapp_elem">
								<div id="axes_tl"></div>
								<div id="axes_tr"></div>
								<div id="axes_bl"></div>
								<div id="axes_br"></div>
								<div id="plnt_elem"></div>
								<div id="labl_elem">
									<div id="dec_labl_elem"></div>
									<div id="nav_labl_elem"></div>
									<div id="ore_labl_elem"></div>
									<div id="mob_labl_elem"></div>
								</div>
								<div id="icon_elem">
									<div id="dec_icon_elem"></div>
									<div id="nav_icon_elem"></div>
									<div id="ore_icon_elem"></div>
									<div id="mob_icon_elem"></div>
								</div>
								<div id="note_elem">
									<div id="dec_note_elem"></div>
									<div id="nav_note_elem"></div>
									<div id="ore_note_elem"></div>
									<div id="mob_note_elem"></div>
								</div>
							</div>
						</div>
					</fieldset>
				</td>
			</tr>
			<tr>
				<td>
					<fieldset id="sect_field">
						<legend>Sector</legend>
						<form>
							<select id="sector_select"></select>
							<input type="button" value="Change" onclick="change_sector()">
						</form>
					</fieldset>
					<fieldset id="size_field">
						<legend>Map Size</legend>
						<form>
							<select id="mapsize_select">
								<option value="0">640x480</option>
								<option value="1" selected="selected">800x600</option>
								<option value="2">1024x768</option>
							</select>
							<input type="button" value="Change" onclick="change_mapsize()">
						</form>
					</fieldset>
				</td>
			</tr>
		</table>
		<p class="cen">
<?php
	if (($_SERVER['SERVER_NAME'] == 'isometricland.com') || ($_SERVER['SERVER_NAME'] == 'www.isometricland.com'))
	{
		print(file_get_contents('../ssi/adsense_horz.php'));
	}
?>
		</p>
		<p class="tny cen"><a target="_blank" rel="license" href="http://creativecommons.org/licenses/LGPL/2.1/"><img alt="Creative Commons License" src="http://creativecommons.org/images/public/somerights20.png"/></a></p>
		<p class="tny cen">"EnB JavaScript Map" v0.9.7, by Michael Horvath. Licensed under a <a target="_blank" rel="license" href="http://creativecommons.org/licenses/LGPL/2.1/">Creative Commons GNU Lesser General Public License License</a>.</p>
		<p class="tny cen">Data is up-to-date as of <a target="_blank" href="http://net-7.org/database/">2009-25-08</a>. View the current <a target="_blank" href="./map/notes.txt">to-do list</a>. Download the entire <a target="_blank" href="http://www.mediafire.com/file/y0ywqyiz2ty/enb_javascript_map_v0_9_0.zip">project</a> (may not be current). Visit my <a target="_blank" href="http://isometricland.com/blog">blog</a>.</p>
	</body>
</html>
