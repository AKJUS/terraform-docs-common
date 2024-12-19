/**
 * Redirects in this file are intended to be for documentation content only. The redirects will be applied to developer.hashicorp.com.
 */
module.exports = [
  // Redirects for Terraform Plugin Framework data handling expansion
  // - https://github.com/hashicorp/terraform-plugin-framework/pull/822
  {
    source: "/terraform/plugin/framework/handling-data/conversion-rules",
    destination: "/terraform/plugin/framework/handling-data/types",
    permanent: true,
  },
  {
    source: "/terraform/plugin/framework/handling-data/custom-types",
    destination: "/terraform/plugin/framework/handling-data/types/custom",
    permanent: true,
  },
  // Redirects for restructured Terraform Plugin Framework docs for GA release of the Framework
  // - https://github.com/hashicorp/terraform-plugin-framework/pull/554
  // - https://github.com/hashicorp/terraform-docs-common/pull/252
  {
    source: "/terraform/plugin/which-sdk",
    destination: "/terraform/plugin/framework-benefits",
    permanent: true,
  },
  {
    source: "/terraform/plugin/framework/schemas",
    destination: "/terraform/plugin/framework/handling-data/schemas",
    permanent: true,
  },
  {
    source: "/terraform/plugin/framework/types",
    destination: "/terraform/plugin/framework/handling-data/attributes",
    permanent: true,
  },
  {
    source: "/terraform/plugin/framework/paths",
    destination: "/terraform/plugin/framework/handling-data/paths",
    permanent: true,
  },
  {
    source: "/terraform/plugin/framework/path-expressions",
    destination: "/terraform/plugin/framework/handling-data/path-expressions",
    permanent: true,
  },
  {
    source: "/terraform/plugin/framework/accessing-values",
    destination: "/terraform/plugin/framework/handling-data/accessing-values",
    permanent: true,
  },
  {
    source: "/terraform/plugin/framework/writing-state",
    destination: "/terraform/plugin/framework/handling-data/writing-state",
    permanent: true,
  },
  {
    source: "/terraform/cloud-docs/workspaces/naming",
    destination: "/terraform/cloud-docs/workspaces/creating",
    permanent: true,
  },
  // Moving TF Plugin Development best practice info
  // - https://github.com/hashicorp/terraform-plugin-sdk/issues/1151
  {
    source: "/terraform/plugin/sdkv2/best-practices/other-languages",
    destination: "/terraform/plugin/best-practices/provider-code",
    permanent: true,
  },
  {
    source: "/terraform/plugin/sdkv2/best-practices/testing",
    destination: "/terraform/plugin/testing/testing-patterns",
    permanent: true,
  },
  {
    source: "/terraform/plugin/sdkv2/best-practices/versioning",
    destination: "/terraform/plugin/best-practices/versioning",
    permanent: true,
  },
  {
    source: "/terraform/plugin/sdkv2/best-practices/sensitive-state",
    destination: "/terraform/plugin/best-practices/sensitive-state",
    permanent: true,
  },
  {
    source: "/terraform/plugin/sdkv2/best-practices/depending-on-providers",
    destination: "/terraform/plugin/best-practices/interacting-with-providers",
    permanent: true,
  },
  {
    source: "/terraform/plugin/sdkv2/best-practices/naming",
    destination: "/terraform/plugin/best-practices/naming",
    permanent: true,
  },
  {
    source: "/terraform/plugin/hashicorp-provider-design-principles",
    destination:
      "/terraform/plugin/best-practices/hashicorp-provider-design-principles",
    permanent: true,
  },
  // Redirects for the ServiceNow Service Catalog for Terraform
  // - https://github.com/hashicorp/terraform-docs-common/pull/375
  {
    source: "/terraform/cloud-docs/integrations/service-now",
    destination:
      "/terraform/cloud-docs/integrations/service-now/service-catalog-terraform",
    permanent: true,
  },
  {
    source:
      "/terraform/cloud-docs/integrations/service-now/service-catalog-config",
    destination:
      "/terraform/cloud-docs/integrations/service-now/service-catalog-terraform/service-catalog-config",
    permanent: true,
  },
  {
    source: "/terraform/cloud-docs/integrations/service-now/admin-guide",
    destination:
      "/terraform/cloud-docs/integrations/service-now/service-catalog-terraform/admin-guide",
    permanent: true,
  },
  {
    source:
      "/terraform/cloud-docs/integrations/service-now/developer-reference",
    destination:
      "/terraform/cloud-docs/integrations/service-now/service-catalog-terraform/developer-reference",
    permanent: true,
  },
  {
    source:
      "/terraform/cloud-docs/integrations/service-now/example-customizations",
    destination:
      "/terraform/cloud-docs/integrations/service-now/service-catalog-terraform/example-customizations",
    permanent: true,
  },
  // Redirect to integrate both Flex and PAYG TFC documentation
  // - https://github.com/hashicorp/terraform-docs-common/pull/399
  {
    source: "/terraform/cloud-docs/overview/change-plan",
    destination: "/terraform/cloud-docs/overview/activate-payg",
    permanent: true,
  },
  // Fix K8s file format to match style guide
  // https://github.com/hashicorp/terraform-docs-common/pull/420/files
  {
    source:
      "/terraform/cloud-docs/integrations/kubernetes/k8s-ops-v2-migration",
    destination:
      "/terraform/cloud-docs/integrations/kubernetes/ops-v2-migration",
    permanent: true,
  },
  // Bitbucket Server Deprecation
  {
    source: "/terraform/cloud-docs/vcs/bitbucket-server",
    destination: "/terraform/cloud-docs/vcs/bitbucket-data-center",
    permanent: true,
  },
  // Dedicated projects UI
  {
    source: "/terraform/cloud-docs/workspaces/organize-workspaces-with-projects",
    destination: "/terraform/cloud-docs/projects/managing",
    permanent: true,
  },
  // Style guide relocation
  {
    source: "/terraform/language/syntax/style",
    destination: "/terraform/language/style",
    permanent: true,
  },
  // HCP Terraform rebranding
  {
    source: "/terraform/cloud-docs/overview/estimate-terraform-cloud-cost",
    destination: "/terraform/cloud-docs/overview/estimate-hcp-terraform-cost",
    permanent: true,
  },
  {
    source: "/terraform/language/settings/terraform-cloud",
    destination: "/terraform/language/settings/cloud",
    permanent: true,
  },
  {
    source: "/terraform/cdktf/create-and-deploy/terraform-cloud",
    destination: "/terraform/cdktf/create-and-deploy/hcp-terraform",
    permanent: true,
  },
  //verified -> partner
  {
    source: "/terraform/cloud-docs/modules/verified",
    destination: "/terraform/cloud-docs/modules/partner",
    permanent: true,
  },
  //Azure AD -> Microsoft Entra ID
  {
    source: "/users-teams-organizations/single-sign-on/azure-ad",
    destination: "/users-teams-organizations/single-sign-on/entra-id",
    permanent: true,
  },
// Reorg terraform block reference
  {
    source: "/terraform/language/settings/cloud",
    destination: "/terraform/language/terraform",
    permanent: true,
  },
  {
    source: "/terraform/language/settings",
    destination: "/terraform/language/terraform",
    permanent: true,
  },
  {
    source: "/terraform/language/settings/backends/configuration",
    destination: "/terraform/language/backend",
    permanent: true,
  },
  {
    source: "/terraform/language/settings/backends/:slug*",
    destination: "/terraform/language/backend/:slug*",
    permanent: true,
  },
  {
    source: "/terraform/cli/cloud/migrating",
    destination: "/terraform/cli/cloud/settings",
    permanent: true,
  },
  {
    source: "/terraform/cloud-docs/projects/managing",
    destination: "/terraform/cloud-docs/projects/manage"
  },
  {
    source: "/terraform/cloud-docs/workspaces/creating",
    destination: "/terraform/cloud-docs/workspaces/create"
  },
  // Stacks links
  {
    source: "/terraform/cloud-docs/stacks/review-plans",
    destination: "/terraform/cloud-docs/stacks/deploy/plans",
    permanent: true
  },
  {
    source: "/terraform/cloud-docs/stacks/deploy/conditions",
    destination: "/terraform/language/stacks/deploy/conditions",
    permanent: true
  },
  // Policy enforcement changes related to pre-written Sentinel policies
  {
    source: "/terraform/cloud-docs/policy-enforcement/sentinel",
    destination: "/terraform/cloud-docs/policy-enforcement/define-policies/sentinel",
    permanent: true
  },
  {
    source: "/terraform/cloud-docs/policy-enforcement/opa",
    destination: "/terraform/cloud-docs/policy-enforcement/define-policies/opa",
    permanent: true 
  },
  {
    source: "/terraform/cloud-docs/policy-enforcement/sentinel/vcs",
    destination: "/terraform/cloud-docs/policy-enforcement/manage-policy-sets/sentinel-vcs",
    permanent: true 
  },
  {
    source: "/terraform/cloud-docs/policy-enforcement/opa/vcs",
    destination: "/terraform/cloud-docs/policy-enforcement/manage-policy-sets/opa-vcs",
    permanent: true 
  },
  {
    source: "/terraform/cloud-docs/policy-enforcement/policy-results",
    destination: "/terraform/cloud-docs/policy-enforcement/view-results",
    permanent: true 
  },
  {
    source: "/terraform/cloud-docs/policy-enforcement/sentinel/json",
    destination: "/terraform/cloud-docs/policy-enforcement/view-results/json",
    permanent: true 
  },
  {
    source: "/terraform/cloud-docs/policy-enforcement/sentinel/mock",
    destination: "/terraform/cloud-docs/policy-enforcement/test-sentinel",
    permanent: true 
  },
  {
    source: "/terraform/cloud-docs/policy-enforcement/sentinel/import/:slug",
    destination: "/terraform/cloud-docs/policy-enforcement/import-reference/:slug",
    permanent: true 
  },
      // Relocate pre-written Sentinel policies topic
  {
    source: "/terraform/cloud-docs/policy-enforcement/define-policies/prewritten-sentinel",
    destination: "/terraform/cloud-docs/policy-enforcement/prewritten-sentinel",
    permanent: true
  },
];