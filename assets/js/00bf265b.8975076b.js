"use strict";(self.webpackChunkhpc_doc_new=self.webpackChunkhpc_doc_new||[]).push([[8330],{7350:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var n=r(4848),i=r(8453);const t={title:"Data Sharing",sidebar_position:2},o=void 0,d={id:"HPC-clusters/data_sharing",title:"Data Sharing",description:"Data Sharing",source:"@site/docs/HPC-clusters/data_sharing.md",sourceDirName:"HPC-clusters",slug:"/HPC-clusters/data_sharing",permalink:"/hpc_doc_new/docs/HPC-clusters/data_sharing",draft:!1,unlisted:!1,editUrl:"https://github.com/amirayuyue/hpc_doc_new/docs/HPC-clusters/data_sharing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Data Sharing",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Condo Model and Cluster Structure",permalink:"/hpc_doc_new/docs/HPC-clusters/condo"},next:{title:"Data Transferring",permalink:"/hpc_doc_new/docs/HPC-clusters/data_transfer"}},l={},c=[{value:"Data Sharing",id:"data-sharing",level:2},{value:"Unix Permissions",id:"unix-permissions",level:3},{value:"Unix Special Permissions",id:"unix-special-permissions",level:3},{value:"Set owner User ID(SUID)",id:"set-owner-user-idsuid",level:3},{value:"Set Group User ID(SGID)",id:"set-group-user-idsgid",level:3},{value:"The <code>chmod</code> Command",id:"the-chmod-command",level:3},{value:"Example of listing the permission of a directory:",id:"example-of-listing-the-permission-of-a-directory",level:3},{value:"Example of Changing the Permissions",id:"example-of-changing-the-permissions",level:3},{value:"Sticky Bit",id:"sticky-bit",level:3},{value:"Public and Group-Readable Directories",id:"public-and-group-readable-directories",level:3},{value:"Edit File Permissions Using <code>chmod</code>",id:"edit-file-permissions-using-chmod",level:3},{value:"1. Symbolic Format",id:"1-symbolic-format",level:3},{value:"Numeric (Octal) Format",id:"numeric-octal-format",level:4},{value:"Access Control Lists and <code>setfacl</code> Command",id:"access-control-lists-and-setfacl-command",level:3},{value:"<code>setfacl Example</code>",id:"setfacl-example",level:4},{value:"<code>getfacl</code> Command",id:"getfacl-command",level:3}];function a(e){const s={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"data-sharing",children:"Data Sharing"}),"\n",(0,n.jsx)(s.h3,{id:"unix-permissions",children:"Unix Permissions"}),"\n",(0,n.jsxs)(s.p,{children:["Every file and directory has read, write and execute permissions associated with it.\nThese permissions dictate what and who has access to the file or directory and what level of access it has.\nThe owner is you, the group is the group(Unix) you are associated with, and ",(0,n.jsx)(s.code,{children:"other"})," is every other user outside the Unix group."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Permission"}),(0,n.jsx)(s.th,{children:"Meaning"}),(0,n.jsx)(s.th,{children:"Meaning for directories"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"read (r)"}),(0,n.jsx)(s.td,{children:"Contents of file can be viewed and displayed"}),(0,n.jsx)(s.td,{children:"Contents of directory can be listed and viewed"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"write (w)"}),(0,n.jsx)(s.td,{children:"File can be modified or deleted"}),(0,n.jsx)(s.td,{children:"Files can be created in or deleted from directory"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"execute (x)"}),(0,n.jsx)(s.td,{children:"File can be run like a program"}),(0,n.jsx)(s.td,{children:"Directory can be entered (i.e., the cd command works)"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"There are also octal or numerical counterparts to the above permissions. The numbers are added together to achieve the same effect as using any combination of the letters."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Permission"}),(0,n.jsx)(s.th,{children:"Meaning"}),(0,n.jsx)(s.th,{children:"Meaning for directories"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Contents of file can be viewed and displayed"}),(0,n.jsx)(s.td,{children:"Contents of directory can be listed and viewed"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"File can be modified or deleted"}),(0,n.jsx)(s.td,{children:"Files can be created in or deleted from directory"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"File can be run like a program"}),(0,n.jsx)(s.td,{children:"Directory can be entered (i.e., the cd command works)"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"unix-special-permissions",children:"Unix Special Permissions"}),"\n",(0,n.jsxs)(s.p,{children:["Special permissions make up the fourth access level in addition to user, group, and other. Special permissions allow for additional privileges over the standard permissions. There are special permissions option for ",(0,n.jsx)(s.strong,{children:"user"}),",",(0,n.jsx)(s.strong,{children:"group"})," and ",(0,n.jsx)(s.strong,{children:"other"})," options."]}),"\n",(0,n.jsx)(s.h3,{id:"set-owner-user-idsuid",children:"Set owner User ID(SUID)"}),"\n",(0,n.jsx)(s.p,{children:"The special permission for the user access level has a single function: A file with SUID always executes as the user who owns the file, regardless of the user passing the command."}),"\n",(0,n.jsx)(s.p,{children:"To locate the state of this special permission, look for an \u2018s\u2019 instead of an \u2018x\u2019 in the executable bit of the file permissions."}),"\n",(0,n.jsx)(s.h3,{id:"set-group-user-idsgid",children:"Set Group User ID(SGID)"}),"\n",(0,n.jsx)(s.p,{children:"This special permission has functions to change how directories and/or files are accessed from a group level."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"If set on a file, it allows the file to be executed as the group that owns the file."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"If set on a directory, any files created in the directory will have their group ownership set to that of the directory owner"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The use of special permissions at the group level are  helpful for groups who constantly collaborate and share directories and files among each other. The use of this level of special permissions also ensures that all following-created files and sub-directories are shared with the group as well without having to redo and edit sharing permissions."}),"\n",(0,n.jsxs)(s.h3,{id:"the-chmod-command",children:["The ",(0,n.jsx)(s.code,{children:"chmod"})," Command"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"chmod"})," command allows the user to change the access mode of a file or directory.\nTo change the access of a file:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chmod <usertype>=<permission> file\n"})}),"\n",(0,n.jsx)(s.p,{children:"To change the access of a directory:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-basj",children:"chmod -R <usertype>=<permission> directory\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"usertype"})," is a variable that represents different inputs:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"usertype"}),(0,n.jsx)(s.th,{children:"meaning"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"u"}),(0,n.jsx)(s.td,{children:"represents the user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"g"}),(0,n.jsx)(s.td,{children:"represents the group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"o"}),(0,n.jsx)(s.td,{children:"represents other"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"example-of-listing-the-permission-of-a-directory",children:"Example of listing the permission of a directory:"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)("summary",{children:" Listing Permissions "}),"\nTo view the current permissions of a given file or directory use:\n",(0,n.jsx)(s.code,{children:"ls -ld filename"})," or ",(0,n.jsx)(s.code,{children:"ls -ld directory"})]}),(0,n.jsx)(s.p,{children:"Example output with a directory:"}),(0,n.jsx)(s.p,{children:"ddrwxr-xr-x 20 guest015 ucm_test 8192 Sep  6 09:47 test_dir/"}),(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"In the output above the user has read, write and executable access. The group has read and executable access. Everyon else on the cluster has read and executable access."}),"\n"]})]}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"20"})," in the above example denotes how many hard-links there are in the directory. ",(0,n.jsx)(s.code,{children:"8192"})," Denotes the size of the directory in bytes"]}),(0,n.jsx)(s.p,{children:"The permissions will be shown in an order of user, then group and then other(everyone else)."})]}),"\n",(0,n.jsx)(s.h3,{id:"example-of-changing-the-permissions",children:"Example of Changing the Permissions"}),"\n",(0,n.jsxs)(s.p,{children:["The command ",(0,n.jsx)(s.code,{children:"chmod -R  u=rwx,g=---, o=--- permissions/"})," will be executed and will update the permissions of the group and everyone else so they will not have read, write or execute access of the directory, ",(0,n.jsx)(s.code,{children:"permissions/"}),"."]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)("summary",{children:" Example Output "}),"\nTo view the changes and ensure they are accurate run the command ",(0,n.jsx)(s.code,{children:"ls -ld"})]}),(0,n.jsx)(s.p,{children:"The output should look similar to this:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"    drwx------ 2 <user> <group> 10 Jul 28 14:47 permissions/ \n"})})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["From this we can see that the first ",(0,n.jsx)(s.code,{children:"rwx"})," correlates to the user and the empty dashes represent that the group and everyone else has lost access to the directory."]})}),"\n",(0,n.jsx)(s.h3,{id:"sticky-bit",children:"Sticky Bit"}),"\n",(0,n.jsxs)(s.p,{children:["Sticky Bit does not affect individual files. However, at the directory level, it restricts file deletion. Only the owner (and root) of a file can remove the file within that directory. If the sticky bit is being edited in symbolic mode then simply add ",(0,n.jsx)(s.code,{children:"+t"})," preceding to the permissions."]}),"\n",(0,n.jsx)(s.p,{children:"Example Below:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chmod +t 751 myfile\n"})}),"\n",(0,n.jsx)(s.h3,{id:"public-and-group-readable-directories",children:"Public and Group-Readable Directories"}),"\n",(0,n.jsx)(s.p,{children:"It is common to adjust the permissions that the group has on the file or directory."}),"\n",(0,n.jsxs)(s.p,{children:["To see what group you are apart of run the command: ",(0,n.jsx)(s.code,{children:"groups"})]}),"\n",(0,n.jsxs)(s.p,{children:["Run the ",(0,n.jsx)(s.code,{children:"groups"})," command to see your group(s):\nEx. output"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"ucm_test\n"})}),"\n",(0,n.jsx)(s.p,{children:"Here's a clearer version of the explanation:"}),"\n",(0,n.jsxs)(s.h3,{id:"edit-file-permissions-using-chmod",children:["Edit File Permissions Using ",(0,n.jsx)(s.code,{children:"chmod"})]}),"\n",(0,n.jsxs)(s.p,{children:["You can edit the permissions for your group or other users on a file using the ",(0,n.jsx)(s.code,{children:"chmod"})," command in two different formats:"]}),"\n",(0,n.jsx)(s.h3,{id:"1-symbolic-format",children:"1. Symbolic Format"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chmod g=<permissions> <file>\n"})}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"g=<permissions>"})," allows for specification for the group permissions.As mentioned above, ",(0,n.jsx)(s.code,{children:"r"})," for read, ",(0,n.jsx)(s.code,{children:"w"})," for write, ",(0,n.jsx)(s.code,{children:"x"})," for execute."]}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"<file>"})," is the file whose permissions that are being modified."]})]}),"\n",(0,n.jsx)(s.p,{children:"Example use:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"#This adds read (r) and write (w) permissions for the group to filename.txt.\nchmod g+rw filename.txt\n"})}),"\n",(0,n.jsx)(s.h4,{id:"numeric-octal-format",children:"Numeric (Octal) Format"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chmod <123> <file>\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["1 -- represents ",(0,n.jsx)(s.strong,{children:"user"}),"(owner) permissions in octal format\n2 -- represents ",(0,n.jsx)(s.strong,{children:"group"})," permissions in octal.\n3 -- represents ",(0,n.jsx)(s.strong,{children:"other"})," (everyone else) permissions in octal."]})}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)("summary",{children:" Breakdown of octal format "}),"\nWhere:"]}),(0,n.jsx)(s.p,{children:"1 represents user (owner) permissions in octal format.\n2 represents group permissions in octal format.\n3 represents others' (everyone else) permissions in octal format.\nThe octal values are based on:"}),(0,n.jsx)(s.p,{children:"4 = read (r)\n2 = write (w)\n1 = execute (x)\nFor each digit, sum these values to specify the permissions. For example:"}),(0,n.jsx)(s.p,{children:"7 = read + write + execute (rwx)\n6 = read + write (rw-)\n5 = read + execute (r-x)\n4 = read only (r--)"})]}),"\n",(0,n.jsx)(s.p,{children:"Example output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chmod 754 filename.txt\n#This sets user to have r,w,x permissions ==> 7\n#Sets group to have r and x permissions ==> 5\n#Sets others to r ==> 4\n"})}),"\n",(0,n.jsx)(s.p,{children:"Sample output of before and after ofchanging permissions:"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)("summary",{children:"Sample output "}),"\n",(0,n.jsx)(s.code,{children:"drwxr----- 2 <user> <group> 10 Jul 28 14:47 permissions/"})]}),(0,n.jsx)(s.p,{children:"Sample Output after changing permissions:"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"drwx------ 2 <user> <group> 10 Jul 28 14:47 permissions/"})})]}),"\n",(0,n.jsxs)(s.h3,{id:"access-control-lists-and-setfacl-command",children:["Access Control Lists and ",(0,n.jsx)(s.code,{children:"setfacl"})," Command"]}),"\n",(0,n.jsxs)(s.p,{children:["Access control list(ACL) allows users to go beyond what is possible with group-readable directories and the ",(0,n.jsx)(s.code,{children:"chmod"})," command. This is essential when not all members of your group should have access to the file/directory or when a user outside the user group needs access to the file/directory."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"setfacl"})," command is used to change access of files or directories to individual users, multiple user groups or everyone on the cluster. The ",(0,n.jsx)(s.code,{children:"setfacl"}),' stands for "set file acl", where acl represents access control list. The ',(0,n.jsx)(s.code,{children:"setfacl"})," command is used for modifying and removing users and groups from the access control list or users who can view and modify files or directories. It also updates and deletes ACL entries for each file and directory that was specified by path."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"-m (--modify)"})," options modify the ACL of a file or directory. ACL entries for this operation must include permissions."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"-x (--remove)"})," option remove ACL entries."]}),"\n",(0,n.jsx)(s.p,{children:"Options available for setfacl:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Option"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"--test"}),(0,n.jsx)(s.td,{children:"Test mode. Instead of changing the ACLs of any files, the resulting ACLs are listed."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-R, --recursive"}),(0,n.jsx)(s.td,{children:"Apply operations to all files and directories recursively. This option is needed if modifying the permissions of a directory."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-h, --help"}),(0,n.jsx)(s.td,{children:"Print a help message explaining the command line options."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Generic ",(0,n.jsx)(s.code,{children:"setfacl"})," syntax format:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"setfacl [-options] [-x or -m] [file or directory]\n"})}),"\n",(0,n.jsx)(s.h4,{id:"setfacl-example",children:(0,n.jsx)(s.code,{children:"setfacl Example"})}),"\n",(0,n.jsx)(s.p,{children:"To give a specific user read access to a file:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"setfacl -m u:username:r filename\n"})}),"\n",(0,n.jsx)(s.p,{children:"To remove all ACL entries for a file:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"setfacl -b filename\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"getfacl-command",children:[(0,n.jsx)(s.code,{children:"getfacl"})," Command"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"getfacl"}),", is used often to simplify and display all users and groups that have access to a file or directory.\nThis command is paired when using the ",(0,n.jsx)(s.code,{children:"setfacl"})," command to access groups and users on the ACL of a file or directory."]}),"\n",(0,n.jsxs)(s.p,{children:["Below is a list of a couple of options for ",(0,n.jsx)(s.code,{children:"getfacl"})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:" Table "}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Option"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"--access"}),(0,n.jsx)(s.td,{children:"Display the file access control list."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-d, --default"}),(0,n.jsx)(s.td,{children:"Display the default access control list."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-R, --recursive"}),(0,n.jsx)(s.td,{children:"Apply operations to all files and directories recursively. This option is needed if viewing the permissions of a directory."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"--help"}),(0,n.jsx)(s.td,{children:"Print help, explaining the command line options."})]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Generic syntax for the use of ",(0,n.jsx)(s.code,{children:"getfacl"})," to list the access list control of a file:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"getfacl <filename>\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Generic syntax for the use of ",(0,n.jsx)(s.code,{children:"getfacl"})," to list the access of a directory and it's contents the syntax is as follows:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"getfacl -R <directoryname/\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Sample output of using ",(0,n.jsx)(s.code,{children:"getfacl"})," is shown below:"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsxs)("summary",{children:["Sample output of using ",(0,n.jsx)(s.code,{children:"getfacl"})," is shown here - dropdown: "]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# file: temppar/\n# owner: user49\n# group: user49\nuser::rwx\ngroup::r-x\nother::r-x\n\n# file: temppar//serial\n# owner: user49\n# group: group49\nuser::rwx\ngroup::r-x\nother::r-x\n"})})]}),"\n",(0,n.jsxs)(s.p,{children:["It can be seen in the sample output above that there is no explicit notation for when a directory is listed as all files and directories start with the output: ",(0,n.jsx)(s.code,{children:"file:"}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["To denote a file versus a directory is a directory that will have a trailing ",(0,n.jsx)(s.code,{children:"/"})," after it name. Furthermore the directory will be the first output listed at the top."]})}),"\n",(0,n.jsx)(s.p,{children:"Files and Directories will have their permission and ownership listed, such as:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The file or directory name"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"owner username"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"group name that the owner belongs to"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"user permissions"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"other users that were explicitly given access to the folder or directory"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"group permissions"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Mask permissions"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"other or global user permissions"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Here is an example of using ",(0,n.jsx)(s.code,{children:"setfacl"})," for an individual user:"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsxs)("summary",{children:["Using ",(0,n.jsx)(s.code,{children:"getfacl"})," to list out current permissions."]}),(0,n.jsx)(s.p,{children:"Here is a sample output:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"    # file: testmod.txt\n    # owner: user49\n    # group: testgroup\n    user::rw-\n    group::r--\n    other::r--\n"})}),(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"It is shown here that the file has the owner with read and write access, the group has read access and everyone else has read access."}),"\n"]})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Now let's say we want to share this file with one other person outside of our group."})}),"\n",(0,n.jsxs)(s.p,{children:["This is done through writing ",(0,n.jsx)(s.code,{children:"setfacl -m u:test001:rw <file.txt>"}),"."]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"This will produce a output similar to the output below:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# file: testmod.txt\n# owner: owner49\n# group: group44139\nuser::rw-\nuser:test001:rw-\ngroup::r--\nmask::r--\nother::r--\n"})}),(0,n.jsxs)(s.p,{children:["With this output we can see that there is a new user who has has access to the file, the permissions are those that were specified in the ",(0,n.jsx)(s.code,{children:"setfacl"})," command, read and write permissions."]})]}),"\n",(0,n.jsxs)(s.p,{children:["Now ",(0,n.jsx)(s.strong,{children:"what if"})," the owner feels that user, test001, in this example, should no longer have write permissions then ",(0,n.jsx)(s.code,{children:"setfacl"}),"?"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"setfacl"}),"would be used again in the following manner:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"setfacl -x u:<test001> <file.txt>\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.strong,{children:["The use of a ",(0,n.jsx)(s.code,{children:"-x"})," instead of a ",(0,n.jsx)(s.code,{children:"-m"})," here is important as the ",(0,n.jsx)(s.code,{children:"-x"})," represents removing a user completely."]})})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Now we can check the user and groups that are on the Access Control List to the file."}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Using ",(0,n.jsx)(s.code,{children:"getfacl <filename>"})," we can see that that the user, ",(0,n.jsx)(s.strong,{children:"test001"}),", has been removed."]}),"\n"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Sample Output:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# file: testmod.txt\n# owner: user49\n# group: testgroup\nuser::rw-\ngroup::r--\nother::r--\n"})}),(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["Add ",(0,n.jsx)(s.code,{children:"-R"})," to edit the permissions of a directory"]})})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>d});var n=r(6540);const i={},t=n.createContext(i);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);