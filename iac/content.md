# Infrastructure as Code 

I configured and provisioned a virtual environment to run my application using IaC approach (**Vagrant & Ansible**), all files can be found in [/iac](/iac)

1. Configured with Vagrant: 1 VM running on Kali Linux 
2. Provisioned the VM with Ansible :
  - nodejs and npm
  - redis
  - webapp (using sync folders)
  - health check of the application and the language runtime installation

## Usage

1. Install VirtualBox - https://www.virtualbox.org/wiki/Downloads
2. Install Vagrant on your computer - https://www.vagrantup.com/downloads.html
3. (Optional) **On Windows**, ensure that Hyper-V is disabled:
   - Open a new PowerShell
   - Run the following command:   
      ```bash
      Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All
      ```
4. Install the webapp using Vagrant and Ansible 
    - Go to folder where you cloned the repo and place you under [/iac](/iac):
        ```
        cd iac/
        ```

    - Create a Kali Linux Virtual Machine provided by Ansible to install the webap and all the reqired tools to run it with the command :
        ```
        vagrant up
        ```

        See the result :

        ![Alt text](../img/Vagrant.png?raw=true "IAC result")
        

       