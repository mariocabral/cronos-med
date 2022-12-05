
setup:
	sudo apt install build-essential libssl-dev librust-gio-sys-dev \
		librust-cairo-sys-rs-dev libgdk-pixbuf-2.0-dev librust-pango-dev \
		librust-atk-sys-dev librust-gdk4-sys-dev libsoup2.4-dev \
		libjavascriptcoregtk-4.0-dev librust-gdk-sys-dev libwebkit2gtk-4.0-dev 
	yarn install
	curl https://sh.rustup.rs -sSf | sh

mongo-up:
	docker compose up -d

mongo-stop:
	docker compose stop
