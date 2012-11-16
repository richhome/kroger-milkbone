// JavaScript Document

function searchKroger() {
	if (document.fmSearch.searchWhere.options[document.fmSearch.searchWhere.selectedIndex].value == "partner")
	{searchUrl = "http://www.google.com/search?hl=en&q="+document.fmSearch.searchTerm.value;}
	else {searchUrl = "http://www.bakersplus.com/Pages/results.aspx?k="+document.fmSearch.searchTerm.value;}
	location.href=searchUrl;
}

function findStores() {
	if (document.fmFindStores.ctl00$StoreSearch1$cbFuel.checked == 1)
	{vFuel="FuelCenter=True"} else {vFuel="FuelCenter=False"}
	if (document.fmFindStores.ctl00$StoreSearch1$cbPharmacy.checked == 1)
	{vPharmacy="Pharmacy=True"} else {vPharmacy="Pharmacy=False"}
	if (document.fmFindStores.ctl00$StoreSearch1$cbMarketplace.checked == 1)
	{vMarketplace="Marketplace=True"} else {vMarketplace="Marketplace=False"}

	vCity = "City="+document.fmFindStores.ctl00$StoreSearch1$txtCity.value;
	vState = "State="+document.fmFindStores.ctl00$StoreSearch1$ddlState.value;
	vRadius = "Radius="+document.fmFindStores.ctl00$StoreSearch1$ddlRadius.value;
	vZipCode = "ZipCode="+document.fmFindStores.ctl00$StoreSearch1$txtZipCode.value;
	vBanner = "Banner=BAKERS";

	fsFullURL = "http://services.bakersplus.com/StoreLocator/StoreLocatorResults.aspx?" + "&" + vCity + "&" + vState + "&" + vZipCode + "&" + vRadius + "&" + vBanner + "&" + vPharmacy + "&" + vFuel + "&" + vMarketplace;
	location.href=fsFullURL;
}
