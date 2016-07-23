if (typeof(SiebelAppFacade.ModifyLayoutPM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.ModifyLayoutPM");
 define("siebel/custom/ModifyLayoutPM", ["siebel/viewpm"],
  function () {
   SiebelAppFacade.ModifyLayoutPM = (function () {
	var siebConsts  = SiebelJS.Dependency( "SiebelApp.Constants" );
    function ModifyLayoutPM(pm) {
     SiebelAppFacade.ModifyLayoutPM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(ModifyLayoutPM, SiebelAppFacade.ViewPM);

    ModifyLayoutPM.prototype.Init = function () {
     SiebelAppFacade.ModifyLayoutPM.superclass.Init.apply(this, arguments);
	 this.AddProperty('OrderStringuspr');
    }

    ModifyLayoutPM.prototype.Setup = function (propSet) {
     SiebelAppFacade.ModifyLayoutPM.superclass.Setup.apply(this, arguments);
	 //var apm = propSet.GetChildByType(siebConsts.get("SWE_APPLET_PM_PS"));
	 var userpref = propSet.GetChildByType('nca').GetChildByType("ai").GetChildByType("apm").GetChildByType("uprf").GetProperty("OrderString");
	 this.AddProperty("OrderString",userpref);
    }

    return ModifyLayoutPM;
   }()
  );
  return "SiebelAppFacade.ModifyLayoutPM";
 })
}
