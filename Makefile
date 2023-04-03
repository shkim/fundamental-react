REGISTRY=https://npm.me.sap.corp
#REGISTRY=http://192.168.0.10:8873

build:
	npm run build

clean:
	rm -rf lib/

npm_login:
	npm adduser --registry ${REGISTRY}

npm_dryrun:
	npm publish --dry-run --registry ${REGISTRY}

npm_publish:
	npm publish --registry ${REGISTRY}

force_unpublish:
	npm unpublish --force --registry ${REGISTRY}
