//local function for containing interface variables. (too many to be assigned as global variables)
function defineInterface(){

	//conversion instruction from SwfVer.as
	/*
		from "mm_common":"2.6.8",
		replace [":"] with [ = "]
		replace [  "] with [var ]
		remove [,] at end of line
	*/

	//local variable for ui link (as string)
	var mm_core = "wodfmwagpixg"
	var mm_title = "2.7.3"
	var mm_tutorial = "2.8.8"
	var mm_common = "2.9.6"
	var mm_port = "2.9.5"
	var rm_font = "2.9.6"
	var rm_icon = "2.8"
	var rm_sound_bgm = "2.1.7"
	var rm_sound_se = "2.8"
	var rm_itemicon = "2.9.3"
	var rm_stype = "2.6.4"
	var um_record = "2.8.8"
	var um_album = "2.8.2"
	var um_itemlist = "2.9.5"
	var um_interior = "2.3"
	var um_duty = "2.9.5"
	var lm_organize = "2.9.4"
	var lm_supply = "2.8.6"
	var lm_remodel = "2.9.5"
	var lm_repair = "2.8.6"
	var lm_arsenal = "2.8.6.1"
	var lm_sally = "2.9.6.3"
	var mm_battle = "2.9.6.4"
	var mm_battleresult = "2.9.6"
	var xm_wedding = "2.0.10"
	var xm_revamp = "2.8.6"
	
	//local variable for ui link
	var uiversion = "?version="
	
	//generated links
	var uilinkgen = [
			"/kcs/Core.swf"+uiversion+mm_core,
			"/kcs/PortMain.swf"+uiversion+mm_port,
			"/kcs/resources/swf/commonAssets.swf"+uiversion+mm_common,
			"/kcs/resources/swf/font.swf"+uiversion+rm_font,
			"/kcs/resources/swf/icons.swf"+uiversion+rm_icon,
			"/kcs/resources/swf/sound_bgm.swf"+uiversion+rm_sound_bgm,
			"/kcs/resources/swf/sound_se.swf"+uiversion+rm_sound_se,
			"/kcs/resources/swf/itemicons.swf"+uiversion+rm_itemicon,
			"/kcs/resources/swf/stype.swf"+uiversion+rm_stype,
			"/kcs/scenes/TitleMain.swf"+uiversion+mm_title,
			"/kcs/scenes/RecordMain.swf"+uiversion+um_record,
			"/kcs/scenes/AlbumMain.swf"+uiversion+um_album,
			"/kcs/scenes/ItemlistMain.swf"+uiversion+um_itemlist,
			"/kcs/scenes/InteriorMain.swf"+uiversion+um_interior,
			"/kcs/scenes/DutyMain.swf"+uiversion+um_duty,
			"/kcs/scenes/OrganizeMain.swf"+uiversion+lm_organize,
			"/kcs/scenes/SupplyMain.swf"+uiversion+lm_supply,
			"/kcs/scenes/RemodelMain.swf"+uiversion+lm_remodel,
			"/kcs/scenes/RepairMain.swf"+uiversion+lm_repair,
			"/kcs/scenes/ArsenalMain.swf"+uiversion+lm_arsenal,
			"/kcs/scenes/SallyMain.swf"+uiversion+lm_sally,
			"/kcs/scenes/BattleMain.swf"+uiversion+mm_battle,
			"/kcs/scenes/BattleResultMain.swf"+uiversion+mm_battleresult,
			"/kcs/scenes/WeddingMain.swf"+uiversion+xm_wedding,
			"/kcs/scenes/RevampMain.swf"+uiversion+xm_revamp
			];
	
	return uilinkgen;
}
