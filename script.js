$('.community-btn').click(function(){
  $('nav ul .community-show').toggleClass("show1");
  $('nav ul .forsale-show').toggleClass("noshow2");
  $('nav ul .gigs-show').toggleClass("nosho3");
  $('nav ul .housing-show').toggleClass("noshow4");
  $('nav ul .jobs-show').toggleClass("nosho5");
  $('nav ul .services-show').toggleClass("noshow6");

  $('nav ul .jobs-show2').toggleClass("noshow5-2");
});
$('.forsale-btn').click(function(){
  $('nav ul .forsale-show').toggleClass("show2");
  $('nav ul .community-show').toggleClass("noshow1");
  $('nav ul .gigs-show').toggleClass("noshow3");
  $('nav ul .housing-show').toggleClass("noshow4");
  $('nav ul .jobs-show').toggleClass("noshow5");
  $('nav ul .services-show').toggleClass("noshow6");

  $('nav ul .jobs-show2').toggleClass("noshow5-2");
});

$('.gigs-btn').click(function(){
  $('nav ul .gigs-show').toggleClass("show3");
  $('nav ul .housing-show').toggleClass("noshow4");
  $('nav ul .jobs-show').toggleClass("noshow5");
  $('nav ul .services-show').toggleClass("noshow6");
  $('nav ul .community-show').toggleClass("noshow1");
  $('nav ul .forsale-show').toggleClass("noshow2");

  $('nav ul .jobs-show2').toggleClass("noshow5-2");
});

$('.housing-btn').click(function(){
  $('nav ul .housing-show').toggleClass("show4");
  $('nav ul .jobs-show').toggleClass("noshow5");
  $('nav ul .jobs-show2').toggleClass("noshow5-2");
  $('nav ul .services-show').toggleClass("noshow6");
  $('nav ul .community-show').toggleClass("noshow1");
  $('nav ul .forsale-show').toggleClass("noshow2");
  $('nav ul .gigs-show').toggleClass("noshow3");
});

$('.jobs-btn').click(function(){
  $('nav ul .jobs-show').toggleClass("show5");
  $('nav ul .jobs-show2').toggleClass("show5-2");
  $('nav ul .services-show').toggleClass("noshow6");
  $('nav ul .community-show').toggleClass("noshow1");
  $('nav ul .forsale-show').toggleClass("noshow2");
  $('nav ul .gigs-show').toggleClass("noshow3");
  $('nav ul .housing-show').toggleClass("noshow4");
});

$('.services-btn').click(function(){
  $('nav ul .services-show').toggleClass("show6");
  $('nav ul .community-show').toggleClass("noshow1");
  $('nav ul .forsale-show').toggleClass("noshow2");
  $('nav ul .gigs-show').toggleClass("noshow3");
  $('nav ul .housing-show').toggleClass("noshow4");
  $('nav ul .jobs-show').toggleClass("noshow5");

  $('nav ul .jobs-show2').toggleClass("noshow5-2");
});