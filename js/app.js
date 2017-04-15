$(document).ready(function(){
	// $('#brand_name').animate({opacity: 0.9,}, 2000);
	$('#bpo_feat_text_ase').hide();
	$('#bpo_feat_text_dme').hide();
	$("#content_main_div").hide();


	$("#resource_icon_fullcol").hover(
		function(){
			$("#resource_fa_icon_div").animate({
				backgroundColor: 'white',}, 100);
			$("#resource_fa_icon").animate({color: 'rgba(0,1,25,0.85)'}, 100);
		},
		function(){
			$("#resource_fa_icon_div").animate({
				backgroundColor: 'transparent',}, 100);
			$("#resource_fa_icon").animate({color: 'white'}, 300);

		}
		);

	$("#dollar_icon_fullcol").hover(
		function(){
			$("#dollar_fa_icon_div").animate({
				backgroundColor: 'white',}, 100);
			$("#dollar_fa_icon").animate({color: 'rgba(0,1,25,0.85)'}, 100);
		},
		function(){
			$("#dollar_fa_icon_div").animate({
				backgroundColor: 'transparent',}, 100);
			$("#dollar_fa_icon").animate({color: 'white'}, 100);
		}
		);

	$("#flexible_icon_fullcol").hover(
		function(){
			$("#flexible_fa_icon_div").animate({
				backgroundColor: 'white',}, 100);
			$("#flexible_fa_icon").animate({color: 'rgba(0,1,25,0.85)'}, 100);
		},
		function(){
			$("#flexible_fa_icon_div").animate({
				backgroundColor: 'transparent',}, 100);
			$("#flexible_fa_icon").animate({color: 'white'}, 100);

		}
		);

	$("#grow_business_div").hover(
		function(){
			$(this).animate({
				backgroundColor: '#920b2d',}, 100);
		},
		function(){
			$(this).animate({
				backgroundColor: '#d11141',}, 100);
		}
		);
	$("#grow_business_div").click(function(){
		$('#bpo_feat_text_ase').hide();
		$('#bpo_feat_text_dme').hide();
		$('html, body').animate({
			scrollTop: $('#central_main_feats_div').offset().top-100}, 500);
		$("#bpo_feat_text_gb").fadeIn(200);

	});

	$("#access_specialist_div").hover(
		function(){
			$(this).animate({
				backgroundColor: '#b24f00',}, 100);
		},
		function(){
			$(this).animate({
				backgroundColor: '#ff7c13',}, 100);
		}
		);
	$("#access_specialist_div").click(function(){
		$('#bpo_feat_text_dme').hide();
		$("#bpo_feat_text_gb").hide();
		$('html, body').animate({
			scrollTop: $('#central_main_feats_div').offset().top-100}, 500);
		$('#bpo_feat_text_ase').fadeIn(200);
	});

	$("#drive_efficiency_div").hover(
		function(){
			$(this).animate({
				backgroundColor: '#007999',}, 100);
			
		},
		function(){
			$(this).animate({
				backgroundColor: '#00aedb',}, 100);
		}
		);
	$("#drive_efficiency_div").click(function(){
		$('#bpo_feat_text_ase').hide();
		$("#bpo_feat_text_gb").hide();
		$('html, body').animate({
			scrollTop: $('#central_main_feats_div').offset().top-100}, 500);
		$('#bpo_feat_text_dme').fadeIn(200);
	});

	$("#anchor_accounts").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_accounts_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);

		$("#content_main_div").addClass('white_border');
		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_accounts_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_accounts_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');
		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_payroll").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_payroll_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_payroll_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_payroll_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_tax").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_tax_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_tax_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_tax_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_insurance").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_insurance_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_insurance_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_insurance_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_healthcare").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_healthcare_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_healthcare_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_healthcare_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_legal").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_legal_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_legal_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_legal_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_property_management").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_property_management_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_property_management_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_property_management_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_retail").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_retail_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_retail_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_retail_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_logistics").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_logistics_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_logistics_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_logistics_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_application").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_application_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_application_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_application_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_business_automation").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_business_automation_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_business_automation_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_business_automation_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_big_data").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_big_data_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});
	$("#anchor_big_data_f").click(function(){
		$("#active_solution_cat_heading").html($(this).text());
		$("#active_solution_cat_explanation").html($("#div_anchor_big_data_text").text());
		$('html, body').animate({
			scrollTop: $('#motiv_quote5').offset().top}, 500);
		$("#content_main_div").addClass('white_border');

		$("#content_main_div").fadeIn(500);
	});

	$("#anchor_nav_autonic").click(function(){
		$('html, body').animate({
			scrollTop: $('#container1').offset().top}, 500);
	});

	$("#li_home").click(function(){
		$('html, body').animate({
			scrollTop: $('#container1').offset().top}, 500);
	});
	$("#li_bpo").click(function(){
		$('html, body').animate({
			scrollTop: $('#container2').offset().top}, 500);
	});
	$("#li_solutions").click(function(){
		$('html, body').animate({
			scrollTop: $('#container3').offset().top}, 500);
	});
	$("#li_benefits").click(function(){
		$('html, body').animate({
			scrollTop: $('#container4').offset().top}, 500);
	});
	$("#li_contact").click(function(){
		$('html, body').animate({
			scrollTop: $('#container5').offset().top}, 500);
	});




	$("#li_home").hover(
		function(){
			$(this).animate({backgroundColor: 'white'}, 100);
			$("#span_home").animate({color:'rgb(0,1,25)'}, 100);
		},
		function(){
			$(this).animate({backgroundColor: 'transparent', color:'white'}, 100);
			$("#span_home").animate({color:'white'}, 100);
		}
		);
	$("#li_bpo").hover(
		function(){
			$(this).animate({backgroundColor: 'white'}, 100);
			$("#span_bpo").animate({color:'rgb(0,1,25)'}, 100);
		},
		function(){
			$(this).animate({backgroundColor: 'transparent', color:'white'}, 100);
			$("#span_bpo").animate({color:'white'}, 100);
		}
		);


	$("#li_solutions").hover(
		function(){
			$(this).animate({backgroundColor: 'white'}, 100);
			$("#span_solutions").animate({color:'rgb(0,1,25)'}, 100);
		},
		function(){
			$(this).animate({backgroundColor: 'transparent', color:'white'}, 100);
			$("#span_solutions").animate({color:'white'}, 100);
		}
		);
	$("#li_benefits").hover(
		function(){
			$(this).animate({backgroundColor: 'white'}, 100);
			$("#span_benefits").animate({color:'rgb(0,1,25)'}, 100);
		},
		function(){
			$(this).animate({backgroundColor: 'transparent', color:'white'}, 100);
			$("#span_benefits").animate({color:'white'}, 100);
		}
		);
	$("#li_contact").hover(
		function(){
			$(this).animate({backgroundColor: 'white'}, 100);
			$("#span_contact").animate({color:'rgb(0,1,25)'}, 100);
		},
		function(){
			$(this).animate({backgroundColor: 'transparent', color:'white'}, 100);
			$("#span_contact").animate({color:'white'}, 100);
		}
		);

	$("#anchor_nav_autonic").hover(
		function(){
			// $(this).animate({backgroundColor: 'white'}, 300);
			$("#span_homenb").animate({color:'gray'}, 300);
		},
		function(){
			// $(this).animate({backgroundColor: 'transparent', color:'white'}, 300);
			$("#span_homenb").animate({color:'white'}, 300);
		}
		);



	/************************ Scroll Down work ********************************/
	$("#scroll-down").click(function(){
		$('html, body').animate({
			scrollTop: $('#container2').offset().top}, 500);
	});

	/************** Animation ************************/
	$("#scroll-down").hover(
		function(){
			$(this).animate(100);
			$("#span_scroll").animate(100);
		},
		function(){
			$(this).animate(100);
			$("#span_scroll").animate(100);
		}
		);

});