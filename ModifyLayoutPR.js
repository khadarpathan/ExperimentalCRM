if (typeof(SiebelAppFacade.ModifyLayoutPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.ModifyLayoutPR");
 define("siebel/custom/ModifyLayoutPR", ["siebel/viewpr"],
  function () {
   SiebelAppFacade.ModifyLayoutPR = (function () {
	var siebConsts  = SiebelJS.Dependency( "SiebelApp.Constants" );
    function ModifyLayoutPR(pm) {
     SiebelAppFacade.ModifyLayoutPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(ModifyLayoutPR, SiebelAppFacade.ViewPR);

    ModifyLayoutPR.prototype.Init = function () {
     SiebelAppFacade.ModifyLayoutPR.superclass.Init.apply(this, arguments);
    }

    ModifyLayoutPR.prototype.ShowUI = function () {
     SiebelAppFacade.ModifyLayoutPR.superclass.ShowUI.apply(this, arguments);
	 $('.siebui-main-column66').sortable();
	 var orderArray = new Array();
	 var json = {};
	 for(var i=0;i< $('.siebui-main-column66').children().length;i++){
	 var name = $('.siebui-main-column66').children().eq(i).find('[id^="s_S_A"]').attr('title');
	 var value =$('.siebui-main-column66').children().eq(i).attr('id');
	 json[name] = value;
	 orderArray.push(name);
	 }
	 var obj = this.GetPM().Get('OrderString');
	 var orderArrayuprf = new Array();
	 if(obj != undefined)
	orderArrayuprf = obj.split(',');
	 for(i=1;i<orderArrayuprf.length;i++)
	 {
		 $("#"+json[orderArrayuprf[i-1]]).after($("#"+json[orderArrayuprf[i]]));
	 }
    }

    ModifyLayoutPR.prototype.BindData = function (bRefresh) {
     SiebelAppFacade.ModifyLayoutPR.superclass.BindData.apply(this, arguments);
    }

    ModifyLayoutPR.prototype.BindEvents = function () {
     SiebelAppFacade.ModifyLayoutPR.superclass.BindEvents.apply(this, arguments);
	 var that = this;
	 var orderArray = new Array();
	 $(".siebui-icon-layout_movedown_on").bind("click", {ctx: this},function (e) {
		 var appletId = $(this).closest($('[id^="S_A"].ui-sortable-handle')).eq(0).attr('id');
		 console.log(appletId);
		 $('#'+appletId).next().after($('#'+appletId));
		 var json = {};
		 for(var i=0;i< $('.siebui-main-column66').children().length;i++){
		 var name = $('.siebui-main-column66').children().eq(i).find('[id^="s_S_A"]').attr('title');
		 var value =$('.siebui-main-column66').children().eq(i).attr('id');
		 json[name] = value;
		 orderArray.push(name);
		 }
		 console.log(json);
		 var inputPS = CCFMiscUtil_CreatePropSet();
			
			inputPS.SetProperty("Key", "OrderString");
			inputPS.SetProperty("OrderString",orderArray.toString() );
			SiebelApp.S_App.GetActiveView().GetAppletMap()["eCalendar Daily Applet Home Page - HI"].GetPModel().OnControlEvent(siebConsts.get("PHYEVENT_INVOKE_CONTROL"),SiebelApp.S_App.GetActiveView().GetAppletMap()["eCalendar Daily Applet Home Page - HI"].GetPModel().Get(siebConsts.get("SWE_MTHD_UPDATE_USER_PREF")), inputPS);
		 });
		 
		 $(".siebui-icon-layout_moveup_on").bind("click", {ctx: this},function (e) {
		 var appletId = $(this).closest($('[id^="S_A"].ui-sortable-handle')).eq(0).attr('id');
		 console.log(appletId);
		 $('#'+appletId).prev().before($('#'+appletId));
		 var json = {};
		 for(var i=0;i< $('.siebui-main-column66').children().length;i++){
		 var name = $('.siebui-main-column66').children().eq(i).find('[id^="s_S_A"]').attr('title');
		 var value =$('.siebui-main-column66').children().eq(i).attr('id');
		 json[name] = value;
		 orderArray.push(name);
		 }
		 console.log(json);
		 //that.GetPM().SetProperty("OrderStringuspr",orderArray.toString());
		 var inputPS = CCFMiscUtil_CreatePropSet();
			
			inputPS.SetProperty("Key", "OrderString");
			inputPS.SetProperty("OrderString",orderArray.toString() );
			SiebelApp.S_App.GetActiveView().GetAppletMap()["eCalendar Daily Applet Home Page - HI"].GetPModel().OnControlEvent(siebConsts.get("PHYEVENT_INVOKE_CONTROL"),SiebelApp.S_App.GetActiveView().GetAppletMap()["eCalendar Daily Applet Home Page - HI"].GetPModel().Get(siebConsts.get("SWE_MTHD_UPDATE_USER_PREF")), inputPS);
		 });
    
    }

    ModifyLayoutPR.prototype.EndLife = function () {
     SiebelAppFacade.ModifyLayoutPR.superclass.EndLife.apply(this, arguments);
    }

    return ModifyLayoutPR;
   }()
  );
  return "SiebelAppFacade.ModifyLayoutPR";
 })
}
