var flagKind=0;
function flag(flagKind)
{
  document.getElementById('headerMenuFlagPL').style.opacity=('0.7');
  document.getElementById('headerMenuFlagEN').style.opacity=('0.7');
  document.getElementById('headerMenuFlagDE').style.opacity=('0.7');
  if (flagKind==1)
  {
    document.getElementById('headerMenuFlagPL').style.opacity=('1.0');
  }
  else if (flagKind==2)
  {
    document.getElementById('headerMenuFlagEN').style.opacity=('1.0');
  }
  if (flagKind==3)
  {
    document.getElementById('headerMenuFlagDE').style.opacity=('1.0');
  }
  else if (flagKind==0)
  {
    document.getElementById('headerMenuFlagPL').style.opacity=('0.7');
    document.getElementById('headerMenuFlagEN').style.opacity=('0.7');
    document.getElementById('headerMenuFlagDE').style.opacity=('0.7');
  }
}
var page;
function navigation(page)
{
  document.getElementById('contentRightAbout').style.display=('block');
  document.getElementById('contentRightExperience').style.display=('none');
  document.getElementById('contentRightEducation').style.display=('none');
  document.getElementById('contentRightCourses').style.display=('none');
  document.getElementById('contentRightComputerSkills').style.display=('none');
  document.getElementById('contentRightSkills').style.display=('none');
  document.getElementById('contentRightHobby').style.display=('none');
  document.getElementById('contentRightMenuAbout').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  document.getElementById('contentRightMenuExperience').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  document.getElementById('contentRightMenuEducation').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  document.getElementById('contentRightMenuCourses').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  document.getElementById('contentRightMenuComputerSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  document.getElementById('contentRightMenuSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  document.getElementById('contentRightMenuHobby').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  if (page==1)
  {
    document.getElementById('contentRightAbout').style.display=('block');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightComputerSkills').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('none');
    document.getElementById('contentRightMenuAbout').style.backgroundColor=('rgba(255, 255, 255, 0.25)');
    document.getElementById('contentRightMenuExperience').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuEducation').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuCourses').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuComputerSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuHobby').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  }
  else if (page==2)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('block');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightComputerSkills').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('none');
    document.getElementById('contentRightMenuAbout').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuExperience').style.backgroundColor=('rgba(255, 255, 255, 0.25)');
    document.getElementById('contentRightMenuEducation').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuCourses').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuComputerSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuHobby').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  }
  if (page==3)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('block');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightComputerSkills').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightMenuHobby').style.display=('none');
    document.getElementById('contentRightMenuAbout').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuExperience').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuEducation').style.backgroundColor=('rgba(255, 255, 255, 0.25)');
    document.getElementById('contentRightMenuCourses').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuComputerSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuHobby').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  }
  else if (page==4)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('block');
    document.getElementById('contentRightComputerSkills').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('none');
    document.getElementById('contentRightMenuAbout').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuExperience').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuEducation').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuCourses').style.backgroundColor=('rgba(255, 255, 255, 0.25)');
    document.getElementById('contentRightMenuComputerSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuHobby').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  }
  if (page==5)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightComputerSkills').style.display=('block');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('none');
    document.getElementById('contentRightMenuAbout').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuExperience').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuEducation').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuCourses').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuComputerSkills').style.backgroundColor=('rgba(255, 255, 255, 0.25)');
    document.getElementById('contentRightMenuSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuHobby').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  }
    else if (page==6)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightComputerSkills').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('block');
    document.getElementById('contentRightHobby').style.display=('none');
    document.getElementById('contentRightMenuAbout').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuExperience').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuEducation').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuCourses').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuComputerSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuSkills').style.backgroundColor=('rgba(255, 255, 255, 0.25)');
    document.getElementById('contentRightMenuHobby').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
  }
  if (page==7)
  {
    document.getElementById('contentRightAbout').style.display=('none');
    document.getElementById('contentRightExperience').style.display=('none');
    document.getElementById('contentRightEducation').style.display=('none');
    document.getElementById('contentRightCourses').style.display=('none');
    document.getElementById('contentRightComputerSkills').style.display=('none');
    document.getElementById('contentRightSkills').style.display=('none');
    document.getElementById('contentRightHobby').style.display=('block');
    document.getElementById('contentRightMenuAbout').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuExperience').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuEducation').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuCourses').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuComputerSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuSkills').style.backgroundColor=('rgba(0, 0, 0, 0.5)');
    document.getElementById('contentRightMenuHobby').style.backgroundColor=('rgba(255, 255, 255, 0.25)');
  }
}
