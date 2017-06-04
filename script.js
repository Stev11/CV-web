var page;
// var toPage=0;

function navigation(page)
{
  document.getElementById('contentRightAbout').style.display=('block');
  document.getElementById('contentRightExperience').style.display=('none');
  document.getElementById('contentRightEducation').style.display=('none');
  document.getElementById('contentRightCourses').style.display=('none');
  document.getElementById('contentRightSkills').style.display=('none');
  document.getElementById('contentRightHobby').style.display=('none');

  if (page==1)
  {
    document.getElementById('contentRightAbout').style.display=('block');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('none');
  }
  else if (page==2)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('block');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('none');
  }
  if (page==3)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('block');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('none');
  }
  else if (page==4)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('block');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('none');
  }
  if (page==5)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('block');
    document.getElementById('contentRightHobby').style.display=('none');
  }
  else if (page==6)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('block');
  }
}
