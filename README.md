______                  ______ _           _           
| ___ \                 |  ___(_)         | |          
| |_/ /___ _ __   ___   | |_   _ _ __   __| | ___ _ __ 
|    // _ \ '_ \ / _ \  |  _| | | '_ \ / _` |/ _ \ '__|
| |\ \  __/ |_) | (_) | | |   | | | | | (_| |  __/ |   
\_| \_\___| .__/ \___/  \_|   |_|_| |_|\__,_|\___|_|   
          | |                                          
          |_|

# Git Hub Repository Finder - Repo Finder

## Search GitHub Repositories Tool

Deployed on Netlify: https://repo-finder.netlify.com/
Deployed on Heroku: http://repo-finder.herokuapp.com/

### Created using ```create-react-app```, managing states with Redux. 

## Search Repositories

To search for a GitHub repository you can write a "Repository Name" in the input box located in the page's Navbar. 
Ater that, you are able to see the number of repositories containing that name found in GitHub's API.

The number of repositories found and the amount of time taken to make that request will be rendered in the screen. Below, the rist of repositories will be rendered. 

-Repo Finder is currently rendering up to 100 repositories searched.

-Under Implementation: Infinite Scroll of Repositories.

## Login

You can directly login to GitHub via login button (currently on implementation). 

## Repository Details

For more information about the Git Repositories found, you can click on the "Details" button located in each different repository box rendered after the search is concluded. Click in "Return" to get back to your main search results. 

Some of the information detailed in this page are: 1) amount of forks, 2) amount of 'open issues', 3) amount of stargazers, 4) amoount of watchers, 5) a link to clone that git repository and 6) a URL to that repository in GitHub, as a link.

## Render Readme

In the Repository Details page, you can render its readme. To render a readme, click on the 'Render Readme' button in the botton of the details page. 
