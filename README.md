# csc648-fa18-Team07

## Please do the following steps before completing Milestone 0.
1. Change the name of the repo from csc648-fa18-TeamNN. All that needs to chanage is the NN to your respective team number. Team numbers whos value is less than 10, please pad with a 0. Ex team 1 is Team01 team 11 is Team11. Please make sure to also remove the username from the repo as well.

1. PLEASE REMOVE THE USERNAME FROM THE REPO!!!

2. Add ALL members of your team to this repo. For it to count, they must ACCEPT the invite.


# INSTRUCTIONS ON GITHUB WORKFLOW
1. Do a git pull & resolve any merge conflicts.
	```
	git pull
	```
2. Create a new branch with the name of the feature you are working on, you will be automatically switched into the branch you just created. You will do all your coding in this branch.
	```
	git checkout -b name-of-you-branch
	```  
3. Once you are done with your work, verify that it works locally by starting the app locally.
	```
	yarn dev 
	```
5. If everything looks fine, you are ready to push this branch into the repo
	```
	git add -A
	git commit -m "write here a brief description of the changes you made"
	git push -u origin name-of-your-branch
	```
6. Go to *github.com* and navigate to the drop down menu on the left side of the screen labled **Branch: master**, located right above your name. From the drop down menu select the development branch that you just pushed your work to. 
	

7. You want to merge your branch with master, select the **pull request** link on the right hand corner
This will take you to a page where you will be able to review your code changes.

8. **Add reviewers** (located on the right side of the page) this will be our team members.

9. In the comments section leave a detailed review of you code changes.

10. Click on **create pull request**

11. **_The owner of the branch WILL NOT MERGE._** It is the job of code reviewers (team members) to view the code before it is merged into the master branch.

12. To review code: Click on the **view deployment** button and test the site to ensure everything is running smoothly.
Team members can also view the code and request edits that need to be made.

13. If there are changes that need to be made, user can go back and make them, _follow steps 1 - 13 workflow to submit their changed code._

14. If everything looks good then one of the code reviewers will merge the pull request via github after everyone has agreed by selecting the following buttons:
	- **merge pull request**
	- **confirm merge**
	- **delete the branch after this is done**
		- _note: This does not delete the branch from your local machine, it is only deleted on github.
		  To delete the branch from your local machine:_ 
	```
	git branch -d name-of-your-branch
	```
15. Changes have been merged, good luck! :)  

