# Deploying to a Kubernetes Cluster

In order to install the application in your own cloud environment we support installation in [Kubernetes](https://kubernetes.io) using the supplied [helm](https://helm.sh) chart. Kubernetes is a Container Orchestration Engine that has been standardised for Dutch municipalities under the [Haven](https://haven.commonground.nl) standard, and for which Helm is the default installation method of components.

This helm chart can be installed with the help of Kubernetes Management Tools like [Rancher](https://rancher.com).

This helm chart can be installed by running Helm from your local machine (see instructions on how to install Helm on [helm.sh](https://helm.sh/docs/intro/install/#through-package-managers), which requires to have [kubectl](https://kubernetes.io/docs/tasks/tools/) installed).

If you have Helm and Kubectl installed and you have configured access to your cluster (usually via a kubeconfig file) you can run the following commands to install the application.

```cli
$ helm repo add woo-website 
$ helm install woowebsite woo-website/woo-website
```

The application can be adapted using the following helm values

| Value                       | Description                                                                                                                                        | Default           |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| `global.domain`             | Sets the domain for the application and its dependencies.                                                                                          | `opencatalogi.nl` |
| `global.tls`                | If the application should request TLS certificates for itself on the domains in `global.domain`, uses a cluster issuer named `letsencrypt-prod`.   | `true`            |


For more information about the helm file for the common gateway see the [installation manual of the common gateway](https://github.com/CommonGateway/CoreBundle/blob/master/docs/features/Installation.md#haven--kubernetes).
Keep in mind that if the common gateway is installed via the subchart of this chart, all values in the manual mentioned should be prefixed by `gateway.`.

## Changelog

- 0.0.1: First version based upon opencatalogi helm file