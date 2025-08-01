@@ .. @@
        // Initialize Socket.IO connection
        const socket = io();
+        window.socket = socket; // Make socket globally available
        
        socket.on('connect', () => {
@@ .. @@
            console.log('Connected to server');
        });
        
+        // Set current user ID for stats tracking
+        fetch('/api/user')
+            .then(response => response.json())
+            .then(data => {
+                if (data.user) {
+                    window.currentUserId = data.user.id;
+                }
+            })
+            .catch(error => console.error('Error fetching user data:', error));
+        
        // Handle logout