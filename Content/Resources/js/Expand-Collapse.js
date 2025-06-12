//For expanding/collapsing dropdowns in a section

$("div.ExpandButton,span.CollapseButton").click(function(){
			
			var $buttonClass = $(this).attr("class");
			var $toolbarButton = $("div.button-group-container-left").find("button").first();
			var $dropDown = $(this).parentsUntil("div.MCDropDown").find("a.MCDropDownHotSpot");
			var $dropDownMain = $dropDown.parentsUntil("div.MCDropDown").parent();
		
			//Click any togglers in the section
			$(this).parentsUntil("div.dropDownSection").find("a.MCToggler").click();
		
					
			//If the section content is closed, open the dropdowns; will work with Expand/Collapse toolbar button
			if ((($buttonClass == "ExpandButton") && ($toolbarButton.hasClass("expand-all-button"))) || (($buttonClass == "CollapseButton") && ($toolbarButton.hasClass("collapse-all-button")))) {	
							
				$(this).toggleClass("ExpandButton CollapseButton");	
				$dropDownMain.removeClass("MCDropDown_Closed");
				$dropDownMain.addClass("MCDropDown_Open");
				$dropDownMain.attr("data-mc-state", "open");
				$dropDown.attr("aria-expanded", "true");
				$dropDownMain.children("div.MCDropDownBody").removeAttr("style");	
			}
			
			//If the section content is open, close the dropdowns
			else {
				
				$(this).toggleClass("CollapseButton ExpandButton");	
				$dropDownMain.removeClass("MCDropDown_Open");
				$dropDownMain.addClass("MCDropDown_Closed");
				$dropDownMain.attr("data-mc-state", "closed");
				$dropDown.attr("aria-expanded", "false");
				$dropDownMain.children("div.MCDropDownBody").attr("display", "none");			
			}
			});