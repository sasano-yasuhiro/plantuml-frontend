#!/bin/bash
cd ~/AWS-PlantUML/dist/
echo "export const awsIcons = " >> ~/aws_icon.js
tree -J >> ~/aws_icon.js
cd 
