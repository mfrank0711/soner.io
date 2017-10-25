def insertContent(htmlFile):
    with open(htmlFile) as newLine:
        for content in newLine:
            fout.write(content)

import os 

print(os.getcwd())

with open("main.html", "rt") as fin:
    with open("index.html", "wt") as fout:
        for line in fin:
            fout.write(line);
            if ('<div id="aws_mysql">' in line):
                insertContent("content/aws_mysql.html")
            
            elif ('<div id="aws_mssql">' in line):
                insertContent("content/aws_mssql.html")
                        
            elif ('<div id="aws_nosql">' in line):
                insertContent("content/aws_nosql.html")
                
            elif ('<div id="aws_datawarehouse">' in line):
                insertContent("content/aws_datawarehouse.html")
                
            elif ('<div id="aws_elasticache">' in line):
                insertContent("content/aws_elasticache.html")
                
                
            elif ('<div id="ms_mysql">' in line):
                insertContent("content/ms_mysql.html")
                
            elif ('<div id="ms_nosql">' in line):
                insertContent("content/ms_nosql.html")
                
                
            elif ('<div id="gcp_mysql">' in line):
                insertContent("content/gcp_mysql.html")
                
            elif ('<div id="gcp_nosql">' in line):
                insertContent("content/gcp_nosql.html")
