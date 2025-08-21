<script>
	import {
		AtlButton,
		AtlCheckbox,
		AtlTextInput,
		AtlLabel,
		AtlField,
		AtlTooltip,
		AtlTextArea,
		AtlSelect,
		AtlRadio,
		AtlLink
	} from '@design-atlas/svelte';
	import { text } from '@sveltejs/kit';

	const icons = {
		info: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`,
		success: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`,
		warning: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m40-120 440-760 440 760H40Zm440-120q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Z"/></svg>`,
		error: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-79q-16 0-30.5-6T423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6Zm-40-361h80v-240h-80v240Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Z"/></svg>`,
		close: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`,
		person: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>`,
		github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  		<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
		</svg>`
	};

	let radioValue;
	let precheckedRadioValue = 'prechecked';

	const options = [{
		key:'osm',
		text:'Open Street Map',
	}, {
		key:'option1',
		text:'Opção 1',
	}, {
		key:'disableOption',
		text:'Disabled Option',
		disabled: true,
	}]

	// Estado inicial do AtlTextArea
	let textAreaStatus = 'default';

	let selected;

	// Função para gerar IDs únicos
	function generateId() {
		return 'atl_' + Math.random().toString(36).substr(2, 9);
	}

	function handleChangeStatus() {
		if (textAreaStatus === 'default') textAreaStatus = 'error';
		else if (textAreaStatus === 'error') textAreaStatus = 'success';
		else textAreaStatus = 'default';
	}

	function printvalue() {
		radioValue = 
		console.log(radioValue);
	}
</script>

<div class="wrapper">
	<div class="container">
		<h1>Design Atlas - Svelte Components Demo</h1>
		<p>
			This is a demo site showcasing the Svelte components from the @design-atlas/svelte package.
		</p>
		<p>
			Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the SvelteKit documentation
		</p>
		<AtlButton>buton</AtlButton>
		<AtlCheckbox>Checkbox</AtlCheckbox>
		<AtlLabel
			showDescription="true"
			description="description text is massive"
			type="required"
			label="text of the label"
		/>
		
		<AtlTextInput />

		<AtlField />

		<AtlTooltip direction="right" text="This is a tooltip from right.">
			{@html icons.info}
		</AtlTooltip>

		<AtlTextArea label='Default Text Area'/>

		<AtlTextArea label="Disabled Non-Resizable Text Area" disabled={true} resizable={false} />

		<AtlTextArea
			label="Default/Error/Success Non-Resizable Custom and Auto Size Text Area"
			status={textAreaStatus}
			resizable={false}
			height={100}
			width={150}
			autosize={true}
		/>
		<AtlButton on:click={handleChangeStatus}>Change Status</AtlButton>
		
		<AtlSelect 
			label="Select" 
			required={true} 
			options={[{"text":"Hello"},{"text":"World"}]} 
			display_func={o => o.text} 
			bind:value={selected} 
			icon={icons.person}
		/>
		<AtlRadio {options} optional={true} label='Radio Buttons' bind:value={radioValue}/>
		<AtlRadio label='Disabled' options={[{key:'prechecked', text:'Prechecked Radio', disabled: true,}]} bind:value={precheckedRadioValue}/>
		<p>Click <AtlLink href={'https://github.com/OSMBrasil/design-atlas'} variant={'basic'} icon={icons.github} leftIcon={true} external>here</AtlLink> or <AtlLink href={'https://github.com/OSMBrasil/design-atlas'} variant={'underline'} icon={icons.github} external>here</AtlLink>.</p>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 2rem;
		align-items: start;
	}
</style>
