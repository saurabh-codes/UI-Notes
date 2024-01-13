// Git is a version control system.
// Git helps you keep track of code changes.
// Git is used to collaborate on code.

// ----------------------------------------------------------------------------

// Working with Git
// - Initialize Git on a folder, making it a Repository
// - Git now creates a hidden folder to keep track of changes in that folder
// - When a file is changed, added or deleted, it is considered modified
// - You select the modified files you want to Stage
// - The Staged files are Committed, which prompts Git to store a permanent snapshot of the files
// - Git allows you to see the full history of every commit.
// - You can revert back to any previous commit.
// - Git does not store a separate copy of every file in every commit, but keeps track of changes made in each commit!

// ----------------------------------------------------------------------------

// What is GitHub?
// - Git is not the same as GitHub.
// - GitHub makes tools that use Git.
// - GitHub is the largest host of source code in the world, and has been owned by Microsoft since 2018.

// ----------------------------------------------------------------------------

// Configure Git
// - Now let Git know who you are. This is important for version control systems, as each
//   Git commit uses this information:

git config --global user.name "abc"
git config --global user.email "abc@code.com"

// - Note: Use global to set the username and e-mail for every repository on your computer.
//   If you want to set the username/e-mail for just the current repo, you can remove global.

// ----------------------------------------------------------------------------

// Creating Git Folder

mkdir myproject  // mkdir makes a new directory.
cd myproject  // cd changes the current working directory.

// ----------------------------------------------------------------------------

// Initialize Git
git init

// - You just created your first Git Repository.
// - Note: Git now knows that it should watch the folder you initiated it on.
//   Git creates a hidden folder to keep track of changes.

// ----------------------------------------------------------------------------

// Git Clone
// - Cloning a repository on our local machine.
// - A clone is a full copy of a repository, including all logging and versions of files.

git clone link-of-repository

// ----------------------------------------------------------------------------

// Showing Hidden Files
ls -a

// Showing Files
ls

// ----------------------------------------------------------------------------

// Git Staging Environment

// The file should be Staged. Let's check the status:
git status

git add index.html  // it will stage index.html
git add .  // it will stage all the files.
// Now the file has been added to the Staging Environment.

// - untracked
new file that git does not yet track.

// - modified
changed.

// - staged
file is ready to be commited.

// - unmodified
unchanged.

// ----------------------------------------------------------------------------

// Git Commit
// - It is the record of change.

git commit -m "first commit"

// - The commit command performs a commit, and the -m "message" adds a message.

// ----------------------------------------------------------------------------

// Push Command
// - Upload local repo content to remote repo.

git push origin main

// ----------------------------------------------------------------------------

// Git Branch
// - In Git, a branch is a new/separate version of the main repository.

git branch  // to check branch

git branch -M main  // to rename branch

git checkout (Branch Name)  // to navigate

git checkout -b (New Branch Name)  // to create new branch

git branch -d (Branch Name ) // to delete branch

git push origin (New Branch) // Upload local repo content to remote repo in New Branch.


// ----------------------------------------------------------------------------

// Git Branch Merge
// - Method-1

git diff (Branch Name)  // to compare commits, branches, files and more.

git merge (Branch Name)  // to merge 2 Branches.

// - Method-2
// 1. create a pull request. (it lets you tell others about changs you have pushed 
//    to a branch in a repository on GitHub)

// ----------------------------------------------------------------------------

// Pull Command

git pull origin main

// - used to fetch and download content from a remote repo and immediately update 
//   the local repo to match that content.

// ----------------------------------------------------------------------------

// Resolving Merge Conflicts
// - An event that takes place when Git is unable to automatically resolve differences 
//   in code between two commits.

// ----------------------------------------------------------------------------

// Undoing Changes

// Case 1. staged changes
git reset File-Name

git reset


// Case 2. commited changes (for one commit)
git reset HEAD~1


// Case 3. commited changes (for many commits)
git reset (commit hash)

git reset --hard (commit hash)  // Update local repo content from remote repo.

git log // it shows history

// ----------------------------------------------------------------------------

// Fork
// - A fork is a new repository that shares code and visibility setting with 
//   the original upstream repository.
// - Fork is a rough copy.

