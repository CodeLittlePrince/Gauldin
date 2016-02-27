function YYYYMMDDstart()   
	   {   
	           MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   
	    
	           //先给年下拉框赋内容   
	           var y  = new Date().getFullYear();   
	           for (var i = (y-60); i < (y+1); i++) //以今年为准，前30年，后30年   
	                   document.reg_testdate.YYYY.options.add(new Option(" "+ i, i));   
	    
	           //赋月份的下拉框   
	           for (var i = 1; i < 13; i++)   
	                   document.reg_testdate.MM.options.add(new Option(" " + i, i));   
	    
	           document.reg_testdate.YYYY.value = y;   
	           document.reg_testdate.MM.value = new Date().getMonth() + 1;   
	           var n = MonHead[new Date().getMonth()];   
	           if (new Date().getMonth() ==1 && IsPinYear(YYYYvalue)) n++;   
	                writeDay(n); //赋日期下拉框Author:meizz   
	           document.reg_testdate.DD.value = new Date().getDate();   
	   }   
	   if(document.attachEvent)   
	       window.attachEvent("onload", YYYYMMDDstart);   
	   else   
	       window.addEventListener('load', YYYYMMDDstart, false);   
	   function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)   
	   {   
	           var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;   
	           if (MMvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
	           var n = MonHead[MMvalue - 1];   
	           if (MMvalue ==2 && IsPinYear(str)) n++;   
	                writeDay(n)   
	   }   
	   function MMDD(str)   //月发生变化时日期联动   
	   {   
	        var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;   
	        if (YYYYvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
	        var n = MonHead[str - 1];   
	        if (str ==2 && IsPinYear(YYYYvalue)) n++;   
	       writeDay(n)   
	   }   
	   function writeDay(n)   //据条件写日期的下拉框   
	   {   
	           var e = document.reg_testdate.DD; optionsClear(e);   
	           for (var i=1; i<(n+1); i++)   
	                e.options.add(new Option(" "+ i, i));   
	   }   
	   function IsPinYear(year)//判断是否闰平年   
	   {     return(0 == year%4 && (year%100 !=0 || year%400 == 0));}   
	   function optionsClear(e)   
	   {   
	        e.options.length = 1;   
	   }   

	   // 显示education
	   var education = $('education');
	   var educationSub = $('educationSub');
	   education.onchange = function(){
	   	educationSub.style.display = 'block';
	   }
	   //显示修改基本信息
	   var userInfoChange = $('userInfoChange');
	   var edit = $('edit');
	   var userInfo = $('userInfo');
	   edit.onclick = function(){
	   	userInfoChange.style.display = 'block';
	   	userInfo.style.display = 'none';
	   }
	   var cancelBase = $('cancelBase');
	   var saveBase = $('saveBase');
	   cancelBase.onclick = function(){
	   	userInfoChange.style.display = 'none';
	   	userInfo.style.display = 'block';
	   }
	   saveBase.onclick = function(){
	   	userInfoChange.style.display = 'none';
	   	userInfo.style.display = 'block';
	   }

	   //实习
	   var addIntern_1 = $('addIntern-1');
	   var addIntern_2 = $('addIntern-2');
	   //点击添加实习经历
	   var addAreaIntern = $('addArea-intern');
	   var addInternParent = $('addInternParent');
	   
	   var cancelWorkExper = $('cancelWorkExper');
	   
	   cancelWorkExper.onclick = function(){
	   	addInternParent.style.display = 'none';
	   	addIntern_2.style.display = 'block';
	   }

	   function show () {
	   		addIntern_2.style.display = 'none';
	   		addInternParent.style.display = 'block';
	   	}

	   addIntern_1.onclick =  function(){
	   		show();
	   }
	   addIntern_2.onclick = function(){
	   		show();
	   }

	   // 项目经验添加
	   var addProj_1 = $('addProj-1');
	   var addProj_2 = $('addProj-2');
	   var addAreaProj = $('addArea-project');
	   var addProjParent = $('addProjParent');
	   var cancelProjExper = $('cancelProjExper');
	   cancelProjExper.onclick = function(){
	   	addProjParent.style.display = 'none';
	   	addProj_2.style.display = 'block';
	   }

	   function showProj () {
	   		addProj_2.style.display = 'none';
	   		addProjParent.style.display = 'block';
	   	}

	   addProj_1.onclick =  function(){
	   		showProj();
	   }
	   addProj_2.onclick = function(){
	   		showProj();
	   }