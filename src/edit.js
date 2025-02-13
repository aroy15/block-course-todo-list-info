import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import './editor.scss';

export default function Edit() {
	const data = useSelect( ( select ) => {
		const store = select( 'blocks-course-plugin/todos' );
		if ( ! store ) {
			return;
		}
		return {
			total: store.getTodosNumber(),
			done: store.getTodosDone(),
			undone: store.getTodosUnDone(),
		};
	} );
	return (
		<div { ...useBlockProps() }>
			{ ! data && (
				<p>
					{ __(
						'Please make sure the Main store plugin is activated',
						metadata.textdomain
					) }
				</p>
			) }
			{ data && (
				<ul>
					<li>
						{ __( 'Done:', metadata.textdomain ) } { data.done }
					</li>
					<li>
						{ __( 'Un-done:', metadata.textdomain ) }{ ' ' }
						{ data.undone }
					</li>
					<li>
						{ __( 'Total:', metadata.textdomain ) } { data.total }
					</li>
				</ul>
			) }
		</div>
	);
}
