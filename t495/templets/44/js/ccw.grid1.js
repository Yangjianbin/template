// JavaScript Document
$(document).ready(function()
{

	// New values
	var animateWgt = '554px';
	var animateHgt = '554px';

	var defaultWgt = '324px';
	var defaultHgt = '270px';

//	var defaultBottom = '284px';
	var defaultBottom = '282px';

	var taget_animateWgt = '209px';
	var notaget_animateWgt = '136px';

//	var box_1_default_top = '20px';
	var box_1_default_top = '0px';
//	var box_2_default_top = '289px';
	var box_2_default_top = '0px';
//	var box_3_default_top = '558px';
//	var box_3_default_top = '558px';
	var box_3_default_top = '282px';
//	var box_4_default_top = '827px';
	var box_4_default_top = '564px';
//	var box_5_default_top = '1096px';
	var box_5_default_top = '1128px';


//	var box_1_default_left = '20px';
	var box_1_default_left = '0px';
//	var box_2_default_left = '339px';
	var box_2_default_left = '338px';
//	var box_3_default_left = '658px';
	var box_3_default_left = '676px';

//	var box_1_set_left2_top = '544px';
	var box_1_set_left2_top = '568px';
//	var box_1_set_left3_top = '754px';
	var box_1_set_left3_top = '791px';
//	var box_1_set_left1_bot = '544px';
	var box_1_set_left1_bot = '568px';
//	var box_1_set_left2_bot = '684px';
	var box_1_set_left2_bot = '716px';
//	var box_1_set_left3_bot = '824px';
	var box_1_set_left3_bot = '864px';

//	var active_top2_set3_left = '863px';
	var active_top2_set3_left = '906px';
	var active_top2_set3_width = '94px';
//	var active_top2_set2bot_left = '180px';
	var active_top2_set2bot_left = '169px';
	var active_bot2_width = '155px';

//	var active_top3_set2top_left = '230px';
	var active_top3_set2top_left = '223px';
//	var active_top3_left = '440px';
	var active_top3_left = '446px';
//	var active_top3_left_bot2 = '160px';
	var active_top3_left_bot2 = '148px';
//	var active_top3_left_bot3 = '300px';
	var active_top3_left_bot3 = '298px';

/*
	// Old values
	var animateWgt = '500px';
	var animateHgt = '520px';


	var defaultWgt = '300px';
	var defaultHgt = '250px';


	var defaultBottom = '270px';

	var taget_animateWgt = '200px';
	var notaget_animateWgt = '126px';

	var box_1_default_top = '0px';
	var box_2_default_top = '270px';
	var box_3_default_top = '540px';
	var box_4_default_top = '810px';
	var box_5_default_top = '1080px';


	var box_1_default_left = '0px';
	var box_2_default_left = '319px';
	var box_3_default_left = '637px';

	var box_1_set_left2_top = '520px';
	var box_1_set_left3_top = '736px';
	var box_1_set_left1_bot = '520px';
	var box_1_set_left2_bot = '666px';
	var box_1_set_left3_bot = '808px';

	var active_top2_set3_left = '837px'; //860
	var active_top2_set3_width = '98px';
	var active_top2_set2bot_left = '160px'; //180
	var active_bot2_width = '140px';

	var active_top3_set2top_left = '220px'; //240
	var active_top3_left = '437px'; //460
	var active_top3_left_bot2 = '146px'; //166
	var active_top3_left_bot3 = '292px'; //312*/

	var box_1_width = defaultWgt;
	var box_1_height = defaultHgt;
	var box_1_left = box_1_default_left;
	var box_1_top = box_1_default_top;

	var box_2_width = defaultWgt;
	var box_2_height = defaultHgt;
	var box_2_left = box_2_default_left;
	var box_2_top = box_1_default_top;

	var box_3_width = defaultWgt;
	var box_3_height = defaultHgt;
	var box_3_left = box_3_default_left;
	var box_3_top = box_1_default_top;

	var box_4_width = defaultWgt;
	var box_4_height = defaultHgt;
	var box_4_left = box_1_default_left;
	var box_4_top = box_2_default_top;

	var box_5_width = defaultWgt;
	var box_5_height = defaultHgt;
	var box_5_left = box_2_default_left;
	var box_5_top = box_2_default_top;

	var box_6_width = defaultWgt;
	var box_6_height = defaultHgt;
	var box_6_left = box_3_default_left;
	var box_6_top = box_2_default_top;



	$('.list-item').bind(
	{
		mouseenter: function()
		{

			var id = $(this).attr('id');
			switch (id)
			{
			case 'box_1':
				return ( //taget box_ 1
				(box_1_width = animateWgt), (box_1_height = animateHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top),

				(box_2_width = taget_animateWgt), (box_2_height = defaultHgt), (box_2_left = box_1_set_left2_top), (box_2_top = box_1_default_top),

				(box_3_width = taget_animateWgt), (box_3_height = defaultHgt), (box_3_left = box_1_set_left3_top), (box_3_top = box_1_default_top),

				(box_4_width = notaget_animateWgt), (box_4_height =
				defaultHgt), (box_4_left = box_1_set_left1_bot), (box_4_top =
				box_2_default_top),

				(box_5_width = notaget_animateWgt), (box_5_height =
				defaultHgt), (box_5_left = box_1_set_left2_bot), (box_5_top =
				box_2_default_top),

				(box_6_width = notaget_animateWgt), (box_6_height =
				defaultHgt), (box_6_left = box_1_set_left3_bot), (box_6_top =
				box_2_default_top),

				(box_7_width = defaultWgt), (box_7_height = defaultHgt), (box_7_left = box_1_default_left), (box_7_top = box_3_default_top),

				(box_8_width = defaultWgt), (box_8_height = defaultHgt), (box_8_left = box_2_default_left), (box_8_top = box_3_default_top),

				(box_9_width = defaultWgt), (box_9_height = defaultHgt), (box_9_left = box_3_default_left), (box_9_top = box_3_default_top),

				(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

				(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

				(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

				(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

				(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

				(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),


				(create_animate()));
				break;
			case 'box_2':

				return ( //taget box_ 2
				(box_1_width = defaultWgt), (box_1_height = defaultHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top),

				(box_2_width = animateWgt), (box_2_height = animateHgt), (box_2_left = box_2_default_left), (box_2_top = box_1_default_top),

				(box_3_width = active_top2_set3_width), (box_3_height =
				defaultHgt), (box_3_left = active_top2_set3_left), (box_3_top =
				box_1_default_top),

				(box_4_width = active_bot2_width), (box_4_height =
				defaultHgt), (box_4_left = box_1_default_left), (box_4_top =
				box_2_default_top),

				(box_5_width = active_bot2_width), (box_5_height =
				defaultHgt), (box_5_left = active_top2_set2bot_left), (box_5_top =
				box_2_default_top),

				(box_6_width = active_top2_set3_width), (box_6_height =
				defaultHgt), (box_6_left = active_top2_set3_left), (box_6_top =
				box_2_default_top),

				(box_7_width = defaultWgt), (box_7_height = defaultHgt), (box_7_left = box_1_default_left), (box_7_top = box_3_default_top),

				(box_8_width = defaultWgt), (box_8_height = defaultHgt), (box_8_left = box_2_default_left), (box_8_top = box_3_default_top),

				(box_9_width = defaultWgt), (box_9_height = defaultHgt), (box_9_left = box_3_default_left), (box_9_top = box_3_default_top),

				(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

				(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

				(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

				(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

				(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

				(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),

				(create_animate()));
				break;

			case 'box_3':
				return ( //taget box_ 3
				(box_1_width = taget_animateWgt), (box_1_height = defaultHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top),

				(box_2_width = taget_animateWgt), (box_2_height = defaultHgt), (box_2_left = active_top3_set2top_left), (box_2_top = box_1_default_top),

				(box_3_width = animateWgt), (box_3_height = animateHgt), (box_3_left = active_top3_left), (box_3_top = box_1_default_top),

				(box_4_width = notaget_animateWgt), (box_4_height =
				defaultHgt), (box_4_left = box_1_default_left), (box_4_top =
				box_2_default_top),

				(box_5_width = notaget_animateWgt), (box_5_height =
				defaultHgt), (box_5_left = active_top3_left_bot2), (box_5_top =
				box_2_default_top),

				(box_6_width = notaget_animateWgt), (box_6_height =
				defaultHgt), (box_6_left = active_top3_left_bot3), (box_6_top =
				box_2_default_top),

				(box_7_width = defaultWgt), (box_7_height = defaultHgt), (box_7_left = box_1_default_left), (box_7_top = box_3_default_top),

				(box_8_width = defaultWgt), (box_8_height = defaultHgt), (box_8_left = box_2_default_left), (box_8_top = box_3_default_top),

				(box_9_width = defaultWgt), (box_9_height = defaultHgt), (box_9_left = box_3_default_left), (box_9_top = box_3_default_top),

				(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

				(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

				(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

				(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

				(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

				(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),


				(create_animate()));
				break;

			case 'box_4':
				return ( //taget box_ 4
				(box_1_width = defaultWgt), (box_1_height = defaultHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top),

				(box_2_width = defaultWgt), (box_2_height = defaultHgt), (box_2_left = box_2_default_left), (box_2_top = box_1_default_top),

				(box_3_width = defaultWgt), (box_3_height = defaultHgt), (box_3_left = box_3_default_left), (box_3_top = box_1_default_top),

				(box_4_width = animateWgt), (box_4_height = animateHgt), (box_4_left = box_1_default_left), (box_4_top = box_2_default_top),

				(box_5_width = taget_animateWgt), (box_5_height = defaultHgt), (box_5_left = box_1_set_left2_top), (box_5_top = box_2_default_top),

				(box_6_width = taget_animateWgt), (box_6_height = defaultHgt), (box_6_left = box_1_set_left3_top), (box_6_top = box_2_default_top),

				(box_7_width = notaget_animateWgt), (box_7_height =
				defaultHgt), (box_7_left = box_1_set_left1_bot), (box_3_top =
				box_1_default_top),

				(box_8_width = notaget_animateWgt), (box_8_height =
				defaultHgt), (box_8_left = box_1_set_left2_bot), (box_8_top =
				box_3_default_top),

				(box_9_width = notaget_animateWgt), (box_9_height =
				defaultHgt), (box_9_left = box_1_set_left3_bot), (box_9_top =
				box_3_default_top),

				(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

				(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

				(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

				(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

				(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

				(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),


				(create_animate()));
				break;

			case 'box_5':

				return ( //taget box_ 5
				(box_1_width = defaultWgt), (box_1_height = defaultHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top), (box_2_width = defaultWgt), (box_2_height = defaultHgt), (box_2_left = box_2_default_left), (box_2_top = box_1_default_top),

				(box_3_width = defaultWgt), (box_3_height = defaultHgt), (box_3_left = box_3_default_left), (box_3_top = box_1_default_top),


				(box_4_width = defaultWgt), (box_4_height = defaultHgt), (box_4_left = box_1_default_left), (box_4_top = box_2_default_top),

				(box_5_width = animateWgt), (box_5_height = animateHgt), (box_5_left = box_2_default_left), (box_5_top = box_2_default_top),

				(box_6_width = active_top2_set3_width), (box_6_height =
				defaultHgt), (box_6_left = active_top2_set3_left), (box_6_top =
				box_2_default_top),

				(box_7_width = active_bot2_width), (box_7_height =
				defaultHgt), (box_7_left = box_1_default_left), (box_7_top =
				box_3_default_top),

				(box_8_width = active_bot2_width), (box_8_height =
				defaultHgt), (box_8_left = active_top2_set2bot_left), (box_8_top =
				box_3_default_top),

				(box_9_width = active_top2_set3_width), (box_9_height =
				defaultHgt), (box_9_left = active_top2_set3_left), (box_9_top =
				box_3_default_top),

				(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

				(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

				(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

				(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

				(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

				(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),


				(create_animate()));
				break;

			case 'box_6':
				return ( //taget box_ 6
				(box_1_width = defaultWgt), (box_1_height = defaultHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top), (box_2_width = defaultWgt), (box_2_height = defaultHgt), (box_2_left = box_2_default_left), (box_2_top = box_1_default_top),

				(box_3_width = defaultWgt), (box_3_height = defaultHgt), (box_3_left = box_3_default_left), (box_3_top = box_1_default_top),

				(box_4_width = taget_animateWgt), (box_4_height = defaultHgt), (box_4_left = box_1_default_left), (box_4_top = box_2_default_top),

				(box_5_width = taget_animateWgt), (box_5_height = defaultHgt), (box_5_left = active_top3_set2top_left), (box_5_top = box_2_default_top),

				(box_6_width = animateWgt), (box_6_height = animateHgt), (box_6_left = active_top3_left), (box_6_top = box_2_default_top),

				(box_7_width = notaget_animateWgt), (box_7_height =
				defaultHgt), (box_7_left = box_1_default_left), (box_7_top =
				box_3_default_top),

				(box_8_width = notaget_animateWgt), (box_8_height =
				defaultHgt), (box_8_left = active_top3_left_bot2), (box_8_top =
				box_3_default_top),

				(box_9_width = notaget_animateWgt), (box_9_height =
				defaultHgt), (box_9_left = active_top3_left_bot3), (box_9_top =
				box_3_default_top),

				(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

				(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

				(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

				(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

				(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

				(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),


				(create_animate()));
				break;
				
			case 'box_7':
				return ( //taget box_ 13
				(box_1_width = defaultWgt), (box_1_height = defaultHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top),

				(box_2_width = defaultWgt), (box_2_height = defaultHgt), (box_2_left = box_2_default_left), (box_2_top = box_1_default_top),

				(box_3_width = defaultWgt), (box_3_height = defaultHgt), (box_3_left = box_3_default_left), (box_3_top = box_1_default_top),

				(box_4_width = defaultWgt), (box_4_height = defaultHgt), (box_4_left = box_1_default_left), (box_4_top = box_2_default_top),

				(box_5_width = defaultWgt), (box_5_height = defaultHgt), (box_5_left = box_2_default_left), (box_5_top = box_2_default_top),

				(box_6_width = defaultWgt), (box_6_height = defaultHgt), (box_6_left = box_3_default_left), (box_6_top = box_2_default_top),

				(box_7_width = defaultWgt), (box_7_height = defaultHgt), (box_7_left = box_1_default_left), (box_7_top = box_3_default_top),

				(box_8_width = defaultWgt), (box_8_height = defaultHgt), (box_8_left = box_2_default_left), (box_8_top = box_3_default_top),

				(box_9_width = defaultWgt), (box_9_height = defaultHgt), (box_9_left = box_3_default_left), (box_9_top = box_3_default_top),

				(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

				(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

				(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

				(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

				(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

				(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),




				(create_animate()));
				break;

			case 'box_8':
				return ( //taget box_ 14
				(box_1_width = defaultWgt), (box_1_height = defaultHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top),

				(box_2_width = defaultWgt), (box_2_height = defaultHgt), (box_2_left = box_2_default_left), (box_2_top = box_1_default_top),

				(box_3_width = defaultWgt), (box_3_height = defaultHgt), (box_3_left = box_3_default_left), (box_3_top = box_1_default_top),

				(box_4_width = defaultWgt), (box_4_height = defaultHgt), (box_4_left = box_1_default_left), (box_4_top = box_2_default_top),

				(box_5_width = defaultWgt), (box_5_height = defaultHgt), (box_5_left = box_2_default_left), (box_5_top = box_2_default_top),

				(box_6_width = defaultWgt), (box_6_height = defaultHgt), (box_6_left = box_3_default_left), (box_6_top = box_2_default_top),

				(box_7_width = defaultWgt), (box_7_height = defaultHgt), (box_7_left = box_1_default_left), (box_7_top = box_3_default_top),

				(box_8_width = defaultWgt), (box_8_height = defaultHgt), (box_8_left = box_2_default_left), (box_8_top = box_3_default_top),

				(box_9_width = defaultWgt), (box_9_height = defaultHgt), (box_9_left = box_3_default_left), (box_9_top = box_3_default_top),

				(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

				(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

				(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

				(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

				(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

				(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),




				(create_animate()));
				break;

			case 'box_9':
				return ( //taget box_ 15
				(box_1_width = defaultWgt), (box_1_height = defaultHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top),

				(box_2_width = defaultWgt), (box_2_height = defaultHgt), (box_2_left = box_2_default_left), (box_2_top = box_1_default_top),

				(box_3_width = defaultWgt), (box_3_height = defaultHgt), (box_3_left = box_3_default_left), (box_3_top = box_1_default_top),

				(box_4_width = defaultWgt), (box_4_height = defaultHgt), (box_4_left = box_1_default_left), (box_4_top = box_2_default_top),

				(box_5_width = defaultWgt), (box_5_height = defaultHgt), (box_5_left = box_2_default_left), (box_5_top = box_2_default_top),

				(box_6_width = defaultWgt), (box_6_height = defaultHgt), (box_6_left = box_3_default_left), (box_6_top = box_2_default_top),

				(box_7_width = defaultWgt), (box_7_height = defaultHgt), (box_7_left = box_1_default_left), (box_7_top = box_3_default_top),

				(box_8_width = defaultWgt), (box_8_height = defaultHgt), (box_8_left = box_2_default_left), (box_8_top = box_3_default_top),

				(box_9_width = defaultWgt), (box_9_height = defaultHgt), (box_9_left = box_3_default_left), (box_9_top = box_3_default_top),

				(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

				(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

				(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

				(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

				(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

				(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),




				(create_animate()));
				break;



			default:
				break;
			}
		}

	});

	var create_animate = function()
	{
		
		$('#box_4').stop(true, true).animate(
		{
			width: box_4_width,
			height: box_4_height,
			left: box_4_left,
			top: box_4_top
		});
		$('#box_5').stop(true, true).animate(
		{
			width: box_5_width,
			height: box_5_height,
			left: box_5_left,
			top: box_5_top
		});
		$('#box_6').stop(true, true).animate(
		{
			width: box_6_width,
			height: box_6_height,
			left: box_6_left,
			top: box_6_top
		});

		$('#box_7').stop(true, true).animate(
		{
			width: box_7_width,
			height: box_7_height,
			left: box_7_left,
			top: box_7_top
		});
		$('#box_8').stop(true, true).animate(
		{
			width: box_8_width,
			height: box_8_height,
			left: box_8_left,
			top: box_8_top
		});
		$('#box_9').stop(true, true).animate(
		{
			width: box_9_width,
			height: box_9_height,
			left: box_9_left,
			top: box_9_top
		});
		/*$('#box_10').stop(true, true).animate(
		{
			width: box_10_width,
			height: box_10_height,
			left: box_10_left,
			top: box_10_top
		});
		$('#box_11').stop(true, true).animate(
		{
			width: box_11_width,
			height: box_11_height,
			left: box_11_left,
			top: box_11_top
		});
		$('#box_12').stop(true, true).animate(
		{
			width: box_12_width,
			height: box_12_height,
			left: box_12_left,
			top: box_12_top
		});

		$('#box_13').stop(true, true).animate(
		{
			width: box_13_width,
			height: box_13_height,
			left: box_13_left,
			top: box_13_top
		});
		$('#box_14').stop(true, true).animate(
		{
			width: box_14_width,
			height: box_14_height,
			left: box_14_left,
			top: box_14_top
		});
		$('#box_15').stop(true, true).animate(
		{
			width: box_15_width,
			height: box_15_height,
			left: box_15_left,
			top: box_15_top
		});*/
	}
$('.list-wrapper1').bind(
	{
		mouseleave: function()
		{
			return (

			(box_1_width = defaultWgt), (box_1_height = defaultHgt), (box_1_left = box_1_default_left), (box_1_top = box_1_default_top),

			(box_2_width = defaultWgt), (box_2_height = defaultHgt), (box_2_left = box_2_default_left), (box_2_top = box_1_default_top),

			(box_3_width = defaultWgt), (box_3_height = defaultHgt), (box_3_left = box_3_default_left), (box_3_top = box_1_default_top),

			(box_4_width = defaultWgt), (box_4_height = defaultHgt), (box_4_left = box_1_default_left), (box_4_top = box_2_default_top),

			(box_5_width = defaultWgt), (box_5_height = defaultHgt), (box_5_left = box_2_default_left), (box_5_top = box_2_default_top),

			(box_6_width = defaultWgt), (box_6_height = defaultHgt), (box_6_left = box_3_default_left), (box_6_top = box_2_default_top),

			(box_7_width = defaultWgt), (box_7_height = defaultHgt), (box_7_left = box_1_default_left), (box_7_top = box_3_default_top),

			(box_8_width = defaultWgt), (box_8_height = defaultHgt), (box_8_left = box_2_default_left), (box_8_top = box_3_default_top),

			(box_9_width = defaultWgt), (box_9_height = defaultHgt), (box_9_left = box_3_default_left), (box_9_top = box_3_default_top),

			(box_10_width = defaultWgt), (box_10_height = defaultHgt), (box_10_left = box_1_default_left), (box_10_top = box_4_default_top),

			(box_11_width = defaultWgt), (box_11_height = defaultHgt), (box_11_left = box_2_default_left), (box_11_top = box_4_default_top),

			(box_12_width = defaultWgt), (box_12_height = defaultHgt), (box_12_left = box_3_default_left), (box_12_top = box_4_default_top),

			(box_13_width = defaultWgt), (box_13_height = defaultHgt), (box_13_left = box_1_default_left), (box_13_top = box_5_default_top),

			(box_14_width = defaultWgt), (box_14_height = defaultHgt), (box_14_left = box_2_default_left), (box_14_top = box_5_default_top),

			(box_15_width = defaultWgt), (box_15_height = defaultHgt), (box_15_left = box_3_default_left), (box_15_top = box_5_default_top),

			(create_animate()));
		}
	});
});