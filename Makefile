local-build:
	$(info Make: Building docker images in local env)
	docker-compose -f docker-compose.yml build

local-up:
	$(info Make: Starting docker in local env)
	docker-compose -f docker-compose.yml up

local-down:
	$(info Make: Stopping docker in local env)
	docker-compose -f docker-compose.yml down

ci-up:
	$(info Make: Starting docker in CI env)
	docker-compose -f docker-compose.yml -f docker-compose.ci.yml up --abort-on-container-exit --exit-code-from e2e
