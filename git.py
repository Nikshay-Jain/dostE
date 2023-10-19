import subprocess

command = "git status"
try:
    output = subprocess.check_output(command, shell=True, text=True, stderr=subprocess.STDOUT)
    # print(output)
    file_lines = output.strip().split('\n')
    print(file_lines)

    for i in range(6):
        status = file_lines[i][1:2]
        print(status)
        file_path = file_lines[i][12:]
        print(file_path)
    #     if status == 'd':
    #         file_path = file_lines[i][13:]
    #         print(file_path)
    #         subprocess.run(f'git rm "{file_path}"')
    #         subprocess.run(f'git commit -m "Removed {file_path}"')
        
    #     elif status == 'm':
    #         file_path = file_lines[i][14:]
    #         print(file_path)
    #         subprocess.run(f'git add "{file_path}"')
    #         subprocess.run(f'git commit -m "Updated {file_path}"')

    #     else:
    #         file_path = file_lines[i][12:]
    #         print(file_path)
    #         subprocess.run(f'git add "{file_path}"')
    #         subprocess.run(f'git commit -m "Added {file_path}"')
        
    #     print(f"Added and committed: {file_path}")
        
    # subprocess.run('git push -u origin main')
    # print("All files added and committed.")

except subprocess.CalledProcessError as e:
    print("Command execution failed.")
    print("Error:", e)