alt.modules["export"]=angular.module("alt-export",[]).factory("$export",["$log",function(e){return{excel:function(e,t){t=t||"download",e+="";var o="data:application/vnd.ms-excel;base64,",s="";s+='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:Name>'+t+"</x:Name><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>"+t+"</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>",s+=e,s+="</body></html>",window.open(o+window.btoa(s),"_blank")},print:function(e,t){e=e||"",t=t||'<link type="text/css" rel="stylesheet" media="all" href="asset/lib/bootstrap2.3.2/bootstrap/css/bootstrap.min.css"/><link type="text/css" rel="stylesheet" media="all" href="asset/css/bootstrap-responsive.min.css"/><link type="text/css" rel="stylesheet" media="all" href="asset/css/style.css"/>';var o=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");o.document.write(t),o.document.write(e),o.document.close(),o.focus(),o.print(),o.close()}}}]),alt.module("alt-export",alt.modules["export"]);