//Function to handle dropdown list
function toggleDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
}

// Function to handle logout
function logout() {
    alert("Logging out...");
    window.location.assign('index.html')
}

// Function to Creating folders, Uploading files, and Displaying files
let folders = {};

function createFolder() {
    const folderName = document.getElementById('folderName').value.trim();
    
    if (folderName) {
        if (!folders[folderName]) {
            folders[folderName] = [];
            
            const folderSelect = document.getElementById('folderSelect');
            const option = document.createElement('option');
            option.value = folderName;
            option.textContent = folderName;
            folderSelect.appendChild(option);

            document.getElementById('folderName').value = '';
            
            alert(`Folder "${folderName}" created successfully!`);
        } else {
            alert(`Folder "${folderName}" already exists.`);
        }
    } else {
        alert('Please enter a valid folder name.');
    }
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const selectedFolder = document.getElementById('folderSelect').value;

    if (fileInput.files.length > 0 && selectedFolder) {
        const loadingIndicator = document.getElementById('loadingIndicator');
        loadingIndicator.style.display = 'block';

        setTimeout(() => {
            const fileName = fileInput.files[0].name;
            folders[selectedFolder].push(fileName);
            loadingIndicator.style.display = 'none';
            displayFiles();
            fileInput.value = '';
        }, 2000);
    } else {
        alert('Please select a file and a folder.');
    }
}

function displayFiles() {
    const selectedFolder = document.getElementById('folderSelect').value;
    const fileListDiv = document.getElementById('fileList');

    if (selectedFolder && folders[selectedFolder]) {
        fileListDiv.innerHTML = '';
        folders[selectedFolder].forEach(file => {
            const div = document.createElement('div');
            div.classList.add('file-item');

            const img = document.createElement('img');
            img.src = 'Assets/File.png'; 
            img.alt = 'Document Icon';
            img.style.width = '20px'; 
            img.style.height = 'auto'; 

            div.appendChild(img); 
            div.appendChild(document.createTextNode(file)); 
            fileListDiv.appendChild(div); 
        });
    } else {
        fileListDiv.innerHTML = 'No files in this folder.';
    }
}