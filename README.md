# github-issue-racker
It's a GitHub issue tracker app made with React Native.

# 🐰 Short app description 
The app consists of 3 main screens: 
* First one is the repository owner screen. Here you need to enter the GitHub repository owner name. 
* Second one is the repository input field. Here you need to enter that organization's repository name. Once you click submit the API call to GitHub is fired and Saga listeners are waiting to fetch data from the response. If the request was successful (200 OK) repository info is loaded to the third app screen. If not, the user receives a popup info message, that something went wrong. 
* On the app third screen you will see a list of repository closed issues. On the top of the list, you will see the selection for open and closed repository issues. The open repository issues tab contains opened issues and pull requests. The closed repository issues tab contains closed issues, merge requests and cancelled merge requests. The bottom of the list has pagination.

# 📱First app screen, repository owner input
Screen contains:
* Repository owner input field;
* Submit button with action to navigate to next screen;
<img src="https://user-images.githubusercontent.com/40159680/146633867-e26b5ea3-b46e-43a8-93d7-2a7ef2a42ff2.png" width="350"/>

# 📱Second app screen, repository name input
Screen contains:
* Repository name input field;
* Submit button with action to pull data from API and navigate to next screen;
<img src="https://user-images.githubusercontent.com/40159680/146634264-0a22bd0c-1816-4350-b346-f8d0638c2345.png" width="350"/>

* If API call fails, user receives info message;
<img src="https://user-images.githubusercontent.com/40159680/146635552-a672a660-642c-4ca9-b9f1-f5bd02669f6d.png" width="350"/>

* If API call secedes, Redux-Saga populates Redux state with issue array and app navigates the user to the third screen.

# 📱Third app screen, repository issues
Screen contains:
* Repository name;
* List selection of open or closed issues;
* Navigation through issues pages. Arrows appear only if the next or previous page exists;
* List is made of 30 elements per page;
<img src="https://user-images.githubusercontent.com/40159680/146635983-cc6a2b0a-d872-48be-88dd-5f72ffac94ff.png" width="350"/>

# ⚠️ Must TODO:
* 👷 App testing;
* 👷 Full app documentation.

# 🎨 Things to improve:
* Use theme provider from styled-components. Now removed for app testing;
* Add more list filters;
* Custom app navigation header;
* Make API call on issues owner name input, to check if the user exists. If no user exists, throw error message;
* Better error handling system;
* Better pagination;
* Overall open and closed issues count in list header.
