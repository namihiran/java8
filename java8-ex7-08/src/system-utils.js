/*
 * Copyright 2015 Kohsuke Namihira All Rights Reserved.
 */
/*
 * Q.
 * 全ての環境変数の値を表示するスクリプトを書きなさい。
 */

print('*** with jjs ***')
for (var e in $ENV)
  print(e + "=" + $ENV[e])

print('\n')

print('*** with system command ***')
var command = readLine('Type a command to get environment variables > ')
print(`${command}`)

/*
 * - log
[ec2-user@ip-xxx-xx-xx-xxx ~]$ jjs -scripting system-utils.js
*** with jjs ***
PATH=/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/opt/aws/bin:/usr/java/default/bin:/home/ec2-user/bin
LESS_TERMCAP_md=
LESS_TERMCAP_me=
HISTCONTROL=ignoredups
LESS_TERMCAP_mb=
AWS_AUTO_SCALING_HOME=/opt/aws/apitools/as
LESS_TERMCAP_se=
HISTSIZE=1000
JAVA_HOME=/usr/java/default
AWS_ELB_HOME=/opt/aws/apitools/elb
LESS_TERMCAP_us=
EC2_HOME=/opt/aws/apitools/ec2
TERM=xterm
XFILESEARCHPATH=/usr/dt/app-defaults/%L/Dt
LANG=en_US.UTF-8
G_BROKEN_FILENAMES=1
AWS_CLOUDWATCH_HOME=/opt/aws/apitools/mon
AWS_RDS_HOME=/opt/aws/apitools/rds
MAIL=/var/spool/mail/ec2-user
LESS_TERMCAP_ue=
LOGNAME=ec2-user
TOMCAT_HOME=/usr/local/tomcat
PWD=/home/ec2-user
_=/usr/java/default/bin/jjs
LESSOPEN=|/usr/bin/lesspipe.sh %s
SHELL=/bin/bash
SSH_TTY=/dev/pts/0
CATALINA_HOME=/usr/local/tomcat
AWS_PATH=/opt/aws
USER=ec2-user
CLASSPATH=.:/usr/java/default/jre/lib:/usr/java/default/lib:/usr/java/default/lib/tools.jar:/usr/local/tomcat/common/lib
NLSPATH=/usr/dt/lib/nls/msg/%L/%N.cat
EC2_AMITOOL_HOME=/opt/aws/amitools/ec2
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lz=01;31:*.xz=01;31:*.bz2=01;31:*.tbz=01;31:*.tbz2=01;31:*.bz=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.rar=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.axa=01;36:*.oga=01;36:*.spx=01;36:*.xspf=01;36:
HOME=/home/ec2-user
SHLVL=1
AWS_IAM_HOME=/opt/aws/apitools/iam


*** with system command ***
Type a command to get environment variables > printenv
LESS_TERMCAP_md=
PATH=/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/opt/aws/bin:/usr/java/default/bin:/home/ec2-user/bin
LESS_TERMCAP_me=
LESS_TERMCAP_mb=
HISTCONTROL=ignoredups
AWS_AUTO_SCALING_HOME=/opt/aws/apitools/as
HISTSIZE=1000
LESS_TERMCAP_se=
JAVA_HOME=/usr/java/default
AWS_ELB_HOME=/opt/aws/apitools/elb
LESS_TERMCAP_us=
EC2_HOME=/opt/aws/apitools/ec2
TERM=xterm
XFILESEARCHPATH=/usr/dt/app-defaults/%L/Dt
LANG=en_US.UTF-8
AWS_CLOUDWATCH_HOME=/opt/aws/apitools/mon
G_BROKEN_FILENAMES=1
AWS_RDS_HOME=/opt/aws/apitools/rds
MAIL=/var/spool/mail/ec2-user
LESS_TERMCAP_ue=
LOGNAME=ec2-user
TOMCAT_HOME=/usr/local/tomcat
PWD=/home/ec2-user
_=/usr/java/default/bin/jjs
SHELL=/bin/bash
LESSOPEN=|/usr/bin/lesspipe.sh %s
SSH_TTY=/dev/pts/0
CATALINA_HOME=/usr/local/tomcat
AWS_PATH=/opt/aws
USER=ec2-user
CLASSPATH=.:/usr/java/default/jre/lib:/usr/java/default/lib:/usr/java/default/lib/tools.jar:/usr/local/tomcat/common/lib
NLSPATH=/usr/dt/lib/nls/msg/%L/%N.cat
EC2_AMITOOL_HOME=/opt/aws/amitools/ec2
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lz=01;31:*.xz=01;31:*.bz2=01;31:*.tbz=01;31:*.tbz2=01;31:*.bz=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.rar=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.axa=01;36:*.oga=01;36:*.spx=01;36:*.xspf=01;36:
SHLVL=1
AWS_IAM_HOME=/opt/aws/apitools/iam
HOME=/home/ec2-user
*/