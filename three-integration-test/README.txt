DINDU GTA V — REAL 3D INTEGRATION TEST

This is a separate integration page. It does NOT replace or edit the main index.html.

It connects the imported real human and blue sedan models to the existing game's
player coordinates, camera, NPC positions, parked cars, traffic cars and movement
animations. The original city, HUD, joystick, mission logic, collision logic and
traffic simulation remain in the original game renderer.

The imported models are loaded from the sibling folder:
../real-3d-test/assets/player.glb
../real-3d-test/assets/blue-sedan.glb

After committing and pushing this folder, test:
https://chijinduu956-dotcom.github.io/dindu-gta-v-game/three-integration-test/

If Three.js or a model fails to load, the page restores the original character and
vehicle rendering automatically. The main game's index.html remains unchanged.

Note: the current human asset uses its supplied T-shirt/shorts outfit. A custom
black-hoodie model/outfit is a separate art upgrade, not claimed by this test.
