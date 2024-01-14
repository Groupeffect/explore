rm -rdf /home/omega/projects/github/groupeffect-studio/app/templates/frontend/assets && \
yarn build && podman exec groupeffect-studio_interface_1 bash setup.sh